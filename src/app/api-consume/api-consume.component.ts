import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api-consume',
  imports: [HttpClientModule,CommonModule ],
  templateUrl: './api-consume.component.html',
  styleUrl: './api-consume.component.css',
  providers:[HttpClient]
})
export class ApiConsumeComponent {
  constructor(private httpClient : HttpClient){}
  WebData:any;
  GetData(){
    this.httpClient.get("https://jsonplaceholder.typicode.com/photos").subscribe(d=>this.WebData=d);
  }
}
