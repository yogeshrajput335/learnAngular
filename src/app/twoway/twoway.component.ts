import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
@Component({
    selector:"twoway1",
    template:`<h1>{{binding}}</h1>
    <button (click)="send()">clickon</button>`
})
export class TwoWayComponent{
 @Input() binding="";
 @Output() vai1=new EventEmitter<string>();
 send() {
    this.vai1.emit("child class");
 }


}