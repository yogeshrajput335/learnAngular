import { Component } from "@angular/core";
import { Input } from "@angular/core";

@Component({
    selector: 'one-componenet',
    template: `<h1>home{{name}}</h1>`

})

export class OneWayComponent {
    @Input() name = "chanadra";
}