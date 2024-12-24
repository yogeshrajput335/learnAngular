import { Component } from "@angular/core";
import { MyAdsComponent } from "../my-ads/my-ads.component";
import { CommonModule, TitleCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'my-b',
    templateUrl: './my-body.component.html',
    imports: [CommonModule,FormsModule,TitleCasePipe],
    styleUrl: './my-body.component.css'
})
export class MyBodyComponent {
    name="test"
    isShow= false;
    hasMyClass=true;
    list=['apple','mango','kiwi','banana']
    myColor="green"
    pipeDemo= "This is for pipe demo"
    purchasedOn = '2024-07-08';
    ChangeShow(){
        this.isShow = !this.isShow;
        this.hasMyClass = !this.hasMyClass;
        this.myColor="blue"
        alert(this.name)
    }

}