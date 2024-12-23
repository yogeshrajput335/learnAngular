import { Routes } from '@angular/router';
import { MyBodyComponent } from './my-body/my-body.component';
import { MyBodyLokaComponent } from './my_bodyLoka/my_body_loka_component';

export const routes: Routes = [
    { path : "body" , component : MyBodyComponent },
    { path : "body1" , component : MyBodyLokaComponent }
];
