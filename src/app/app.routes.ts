import { Routes } from '@angular/router';
import { MyHandComponent } from './my-hand/my-hand.component';
import { MyHeadComponent } from './my-head/my-head.component';
import { AppapiconsumeComponent } from './appapiconsume/appapiconsume.component';

export const routes: Routes = [
    { path : "change", component : MyHandComponent},
    { path : "old", component : MyHeadComponent},
    { path : "new", component : AppapiconsumeComponent }
];
 