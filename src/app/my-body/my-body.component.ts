import { Component } from "@angular/core";
import { MyAdsComponent } from "../my-ads/my-ads.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'my-b',
    templateUrl: './my-body.component.html',
    imports: [CommonModule,FormsModule],
    styleUrl: './my-body.component.css'
})
export class MyBodyComponent {
    name="test"
    isShow= false;
    hasMyClass=true;
    list=['apple','mango','kiwi','banana']
    myColor="green"
    ChangeShow(){
        this.isShow = !this.isShow;
        this.hasMyClass = !this.hasMyClass;
        this.myColor="blue"
        alert(this.name)
    }

}