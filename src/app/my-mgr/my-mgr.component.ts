import { Component } from '@angular/core';

@Component({
    selector: 'my-mgr',
    template: `
    <div style="color:red; background-color:black">This is my class</div><br>

    <div>
      <button (click)="angularjs()" 
              style="color:black; background-color:yellow; text-align:center; text-decoration-line: overline underline; letter-spacing: 5px; font-style: oblique; font-size: 40px;">
        ANGULAR TRAINING
      </button>
    </div>

    <h1 style="color:black; background-color:yellow; text-align:center; text-decoration-line: overline underline;">
      TYPE SCRIPT
    </h1>
    
  `
})

export class MymgrComponent {

    angularjs() {
        alert('AngularJS Button Clicked!');
    }

}
