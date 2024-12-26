
//https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MongoConnectService } from '../services/mongo-connect.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mongoapiconsume',
  imports: [CommonModule,FormsModule ],
  templateUrl: './mongoapiconsume.component.html',
  styleUrl: './mongoapiconsume.component.css'
})
export class MongoapiconsumeComponent {
  // name=""
  // age=0
  user={name:'',age:0}
  constructor(private  mongoService: MongoConnectService){}
  WebData:any;
  GetData(){
    this.mongoService.getAll().subscribe(d=>this.WebData=d);
  }
  SaveUser(){
    this.mongoService.addUser({'name':this.user.name,'age':this.user.age}).subscribe(d=> 
      {
        alert('User added')
        this.GetData();
      });
  }
  deleteUser(id:any){
    this.mongoService.deleteUser(id).subscribe(d=> 
      {
        alert(d)
        //this.GetData();
      });
  }
}
