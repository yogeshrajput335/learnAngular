import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHeadComponent } from './my-head/my-head.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { MyFootComponent } from './my-foot/my-foot.component';
@Component({
  selector: 'app-root',
  imports: [MyHeadComponent,MyBodyComponent,MyFootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}
