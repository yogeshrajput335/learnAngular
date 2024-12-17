import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyLeftComponent } from './my-left/my-left.component';
import { MyRightComponent } from './my-right/my-right.component';

@Component({
  selector: 'app-root',
  imports: [MyHeaderComponent,MyLeftComponent,MyRightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}
