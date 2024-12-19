import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-property-demo',
  imports: [FormsModule],
  templateUrl: './event-property-demo.component.html',
  styleUrl: './event-property-demo.component.css'
})
export class EventPropertyDemoComponent {
 testVariable = "Hello";
 twoWay="text";
 
 showMessge(data:string){
  alert("Hello: "+data)
  //console.log("Event is triggered :"+ data);
 }
}
