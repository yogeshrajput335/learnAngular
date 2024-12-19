import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyAdsComponent } from '../my-ads/my-ads.component';

@Component({
  selector: 'app-my-head',
  imports: [MyAdsComponent],
  templateUrl: './my-head.component.html',
  styleUrl: './my-head.component.css'
})
export class MyHeadComponent {
  @Input() text="";
  @Output() var_1 = new EventEmitter<string>();

  send(){
    this.var_1.emit("Data from Head child");
  }
}
