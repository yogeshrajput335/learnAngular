import { Component, Input } from "@angular/core";
@Component({
    selector: "onewaybinding",
    template: `<div style='color:red'>{{binding}}</div>`
})
 export class oneWayBinding{
    @Input ()binding="";
 }
