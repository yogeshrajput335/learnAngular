import { Component } from '@angular/core';

@Component({
    selector: 'app_event_property',
    templateUrl: './event.property.html',

})
export class EventTwowayComponent {
    message = "Hello";
    name = "";
    number: number | null = null;
    showMessage(data: string) {
        alert("Test: " + data)
    }
}
