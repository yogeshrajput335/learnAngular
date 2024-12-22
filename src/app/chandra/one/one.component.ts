import { Component } from "@angular/core";
import { Input } from "@angular/core";

@Component({
    selector: 'one-componenet',
    template: `<h1>home:{{item}}</h1>`

})

export class OneWayComponent {
    @Input() item = "";
}