import { Component } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector:'my-laptop',
  template: `<h1>hi this is vaishu{{num}}</h1>`
})
export class MyLaptopComponent{
@Input() num="";
}