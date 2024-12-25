
//https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mongoapiconsume',
  imports: [HttpClientModule,CommonModule ],
  templateUrl: './mongoapiconsume.component.html',
  styleUrl: './mongoapiconsume.component.css',
  providers:[HttpClient]
})
export class MongoapiconsumeComponent {
  constructor(private httpClient : HttpClient){}
  WebData:any;
  GetData(){
    this.httpClient.get("http://localhost:3000/api/getAll").subscribe(d=>this.WebData=d);
  }
}
