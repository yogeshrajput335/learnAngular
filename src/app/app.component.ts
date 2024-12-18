import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHeadComponent } from './my-head/my-head.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { MymgrComponent } from './my-mgr/my-mgr.component';
import { MyFootComponent } from './my-foot/my-foot.component';
import { MyFileComponent } from './my-file/my-file.component';
@Component({
  selector: 'app-root',
<<<<<<< HEAD
  imports: [MyHeadComponent,MyBodyComponent,MyFootComponent,MyFileComponent],
=======
  imports: [MyHeadComponent, MyBodyComponent, MymgrComponent, MyFootComponent],
>>>>>>> f6e7eaa4825ed59c843a632cb066cd402eea5bc8
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}
