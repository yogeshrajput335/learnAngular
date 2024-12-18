import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHeadComponent } from './my-head/my-head.component';
import { MyBodyComponent } from './my-body/my-body.component';
<<<<<<< HEAD
import { MymgrComponent } from './my-mgr/my-mgr.component';
@Component({
  selector: 'app-root',
  imports: [MyHeadComponent, MyBodyComponent, MymgrComponent],
=======
import { MyFootComponent } from './my-foot/my-foot.component';
@Component({
  selector: 'app-root',
  imports: [MyHeadComponent,MyBodyComponent,MyFootComponent],
>>>>>>> f4dc28814ec15f162d5de8257eb7c0c6f91815b9
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}
