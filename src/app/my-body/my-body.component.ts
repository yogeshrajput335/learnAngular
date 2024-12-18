import { Component } from "@angular/core";
import { MyAdsComponent } from "../my-ads/my-ads.component";

@Component({
    selector: 'my-b',
    templateUrl: './my-body.component.html',
    imports: [MyAdsComponent]
})
export class MyBodyComponent {

}