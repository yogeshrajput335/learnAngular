import { Routes } from '@angular/router';
import { MyBodyComponent } from './my-body/my-body.component';
import { MyBodyLokaComponent } from './my_bodyLoka/my_body_loka_component';
import { MyHandComponent } from './my-hand/my-hand.component';
import { MyHeadComponent } from './my-head/my-head.component';

export const routes: Routes = [
    { path : "change", component : MyHandComponent},
    { path : "old", component : MyHeadComponent}
];
 