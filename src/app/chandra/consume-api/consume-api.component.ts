import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-consume-api',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './consume-api.component.html',
  styleUrl: './consume-api.component.css',
  providers: [HttpClient]
})
export class ConsumeApiComponent {
  constructor(private httpClient: HttpClient) { }
  WebData: any;
  td() {
    this.httpClient.get("https://jsonplaceholder.typicode.com/photos").subscribe(d => this.WebData = d);
  }
}