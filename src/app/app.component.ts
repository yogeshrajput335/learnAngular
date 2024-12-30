import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MangodbnewComponentComponent } from './mangodbnew.component/mangodbnew.component.component';
// import { MyHeadComponent } from './my-head/my-head.component';
// import { MyBodyComponent } from './my-body/my-body.component';
// import { MymgrComponent } from './my-mgr/my-mgr.component';
// import { MyBodyLokaComponent } from './my_bodyLoka/my_body_loka_component';
// import { MyFootComponent } from './my-foot/my-foot.component';
// import { MyFileComponent } from './my-file/my-file.component';
@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,RouterLinkActive,MangodbnewComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}