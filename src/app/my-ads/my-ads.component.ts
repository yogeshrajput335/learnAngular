import { Component } from "@angular/core";

@Component({
    selector:"test-details",
    template:'<p>My {{adType}} ads <button (click)="Change()">Change Ads</button></p>'
})
export class MyAdsComponent{
    adType="pepsudent"

    Change(){
        this.adType="Colgate"
    }
}