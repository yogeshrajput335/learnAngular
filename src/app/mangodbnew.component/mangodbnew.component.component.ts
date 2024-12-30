
//https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MongoConnectService } from '../Services/mongodb-connect-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mongoapiconsume',
  imports: [CommonModule,FormsModule ],
  templateUrl: './mangodbnew.component.component.html',
  styleUrl: './mangodbnew.component.component.css'
})
export class  MangodbnewComponentComponent {
  // name=""
  // age=0
  user={_id:'',name:'',age:0}
  constructor(private  mongoService: MongoConnectService){}
  WebData:any;
  GetData(){
    this.mongoService.getAll().subscribe(d=>this.WebData=d);
  }
  SaveUser(){
    if(this.user._id==""){
      this.mongoService.addUser({'name':this.user.name,'age':this.user.age}).subscribe(d=> 
      {
        alert('User added')
        this.GetData();
      });
    } else {
      this.mongoService.updateUser({'_id':this.user._id,'name':this.user.name,'age':this.user.age},this.user._id).subscribe(d=> 
        {
          alert('User updated')
          this.GetData();
        });
    }
  }
  deleteUser(id:any){
    this.mongoService.deleteUser(id).subscribe(d=> 
      {
        alert(d)
        //this.GetData();
      });
  }
  updateUser(user:any){
    this.user = user;
  }
}