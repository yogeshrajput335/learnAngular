import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHeadComponent } from './my-head/my-head.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { MymgrComponent } from './my-mgr/my-mgr.component';
<<<<<<< HEAD
import { MyBodyLokaComponent } from './my_dodyLoka/my_body_loka_component';
=======
>>>>>>> d71a2057f56e3096d2b5bcc73738125de3b62e77
import { MyFootComponent } from './my-foot/my-foot.component';
import { MyFileComponent } from './my-file/my-file.component';
@Component({
  selector: 'app-root',
<<<<<<< HEAD
  imports: [MyHeadComponent, MyBodyComponent, MymgrComponent,MyBodyLokaComponent,MyFootComponent],
=======
<<<<<<< HEAD
  imports: [MyHeadComponent,MyBodyComponent,MyFootComponent,MyFileComponent],
=======
  imports: [MyHeadComponent, MyBodyComponent, MymgrComponent, MyFootComponent],
>>>>>>> f6e7eaa4825ed59c843a632cb066cd402eea5bc8
>>>>>>> d71a2057f56e3096d2b5bcc73738125de3b62e77
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}