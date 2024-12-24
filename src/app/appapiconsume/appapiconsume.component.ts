import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-appapiconsume',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './appapiconsume.component.html',
  styleUrl: './appapiconsume.component.css',
  providers:[HttpClient]
})
export class AppapiconsumeComponent {
  constructor(private httpClient: HttpClient) { }
  WebData: any;
  all() {
    this.httpClient.get("https://jsonplaceholder.typicode.com/photos").subscribe(d => this.WebData=d);
  }

}
