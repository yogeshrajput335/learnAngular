import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHeadComponent } from './my-head/my-head.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { MymgrComponent } from './my-mgr/my-mgr.component';
import { MyBodyLokaComponent } from './my_bodyLoka/my_body_loka_component';
import { MyFootComponent } from './my-foot/my-foot.component';
import { MyFileComponent } from './my-file/my-file.component';
import { EventPropertyDemoComponent } from './event-property-demo/event-property-demo.component';
import { MyLaptopComponent } from './my-laptop/my-laptop.component';
import { MyHandComponent } from './my-hand/my-hand.component';
@Component({
  selector: 'app-root',
  imports: [MyHeadComponent,MyBodyComponent, EventPropertyDemoComponent,MyBodyComponent, MymgrComponent,MyBodyLokaComponent,MyFootComponent,MyFileComponent,MyLaptopComponent,MyHandComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
  a = "Special Input Text";
  trainingName = "Devops Training";
  text = "Text from parent"

  getData(val: string) {
    this.text = val;
  }
}