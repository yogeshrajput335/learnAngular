import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app_event_property',
    imports: [FormsModule],
    templateUrl: './event.property.html',

})
export class EventTwowayComponent {
    textMesg = "Hello";
    testT = "text";
    showMessage(data: string) {
        alert("Test: " + data)
    }
}
