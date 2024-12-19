import { Component, Input } from "@angular/core";

@Component({
    selector:"my-file",
    template: `
    <div style="color:red; background-color:black">{{var1}}</div><br>

    <div>
      <button (click)="angularjs()" 
              style="color:black; background-color:yellow; text-align:center; text-decoration-line: overline underline; letter-spacing: 5px; font-style: oblique; font-size: 40px;">
        {{trainingName}}
      </button>
    </div>

    <h1 style="color:black; background-color:yellow; text-align:center; text-decoration-line: overline underline;">
      TYPE SCRIPT
    </h1>`

})
 export class MyFileComponent{

  @Input() var1:string="";
  @Input() trainingName ="";

  angularjs(){
alert("hello");
 }
}
