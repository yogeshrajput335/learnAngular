import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MongoConnectService {

 
  constructor(private httpClient : HttpClient) { }
  
  getAll(){
    return this.httpClient.get("http://localhost:3000/api/getAll");
  }

  addUser(data:any){
    return this.httpClient.post("http://localhost:3000/api/post",data);
  }

  deleteUser(id:any){
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.delete("http://localhost:3000/api/delete/"+id,{headers: headers});
  }
  updateUser(user:any,id:any){
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.patch("http://localhost:3000/api/update/"+id,user,{headers: headers})
  }
}
