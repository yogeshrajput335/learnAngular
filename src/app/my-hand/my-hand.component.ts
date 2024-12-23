import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MyAdsComponent } from "../my-ads/my-ads.component";

 @Component({
    selector: 'my-hand',
    templateUrl: './my-hand.component.html',
    imports: [CommonModule,FormsModule],
    styleUrl: './my-hand.component.css'
 }) 
 export class MyHandComponent {
    name=" "
    isHand=false;
    hasMyHand=true;
    list=['left side','right side', 'up side','down side']
    myLight="red"
    ChangeHand(){
        this.isHand=!this.isHand;
        this.hasMyHand=!this.hasMyHand;
        this.myLight="brown"
        alert(this.name)
    }
    name1=" "
    isRight=false;
    havingR=true;
    list1=['V','A','I','S','H']
    myOne="red"
    WorldHas(){
      this.isRight=!this.isRight;
      this.havingR=!this.havingR;
      this.myOne="green"
      alert(this.name1)
    }

 }