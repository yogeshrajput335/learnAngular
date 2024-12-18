import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHeadComponent } from './my-head/my-head.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { MymgrComponent } from './my-mgr/my-mgr.component';
import { MyBodyLokaComponent } from './my_dodyLoka/my_body_loka_component';
import { MyFootComponent } from './my-foot/my-foot.component';
@Component({
  selector: 'app-root',
  imports: [MyHeadComponent, MyBodyComponent, MymgrComponent,MyBodyLokaComponent,MyFootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}