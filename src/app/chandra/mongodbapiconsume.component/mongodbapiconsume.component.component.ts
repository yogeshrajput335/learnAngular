import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MongoConnectService } from '../Services/mongodb-connect-services-new.service';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';

@Component({
  selector: 'app-mongodbapiconsume.component',
  imports: [CommonModule, FormsModule],
  templateUrl: './mongodbapiconsume.component.component.html',
  styleUrl: './mongodbapiconsume.component.component.css'
})
export class MongodbapiconsumeComponentComponent {

  // name=""
  // age=0
  user = { _id: '', name: '', age: 0 }
  constructor(private mongoService: MongoConnectService) { }
  WebData: any;
  GetData() {
    this.mongoService.getAll().subscribe(d => this.WebData = d);
  }
  SaveUser() {
    if (this.user._id == "") {
      this.mongoService.addUser({ 'name': this.user.name, 'age': this.user.age }).subscribe(d => {
        alert('User added')
        this.GetData();
      });
    } else {
      this.mongoService.updateUser({ '_id': this.user._id, 'name': this.user.name, 'age': this.user.age }, this.user._id).subscribe(d => {
        alert('User updated')
        this.GetData();
      });
    }
  }
  deleteUser(id: any) {
    this.mongoService.deleteUser(id).subscribe(d => {
      alert(d)
      //this.GetData();
    });
  }
  updateUser(user: any) {
    this.user = user;
  }
}