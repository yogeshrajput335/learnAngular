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
import { OneWayComponent } from './chandra/one/one.component';
import { TwoWayComponent } from './chandra/second/two.component';
import { BuiltDirComponent } from './chandra/Structural/built_dir';
import { EventTwowayComponent } from './chandra/event/event.property';
@Component({
  selector: 'app-root',
  imports: [TwoWayComponent, MyHeadComponent, MyBodyComponent, EventPropertyDemoComponent, MyBodyComponent, MymgrComponent, MyBodyLokaComponent, MyFootComponent, MyFileComponent, MyLaptopComponent, OneWayComponent, BuiltDirComponent, EventTwowayComponent],
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



  oneItem = "this is one way";

  js = "parent class";
  onenewItem(val: string) {
    this.js = val;
  }


  textMesg = "event-property";
  testT = "this is a class";
}
