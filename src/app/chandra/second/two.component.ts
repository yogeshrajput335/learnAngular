import { Component, Input } from "@angular/core";
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
@Component({
    selector: "twoComponent",
    template: `<p>Hello {{js}}</p>
    <button (click)="send()">Send data</button>`
})
export class TwoWayComponent {

    @Input() js = "";
    @Output() val_1 = new EventEmitter<string>();

    send() {
        this.val_1.emit("Data from child");

    }
}