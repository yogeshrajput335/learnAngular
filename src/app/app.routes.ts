import { Routes } from '@angular/router';;
import { MyHeadComponent } from './my-head/my-head.component';
import { MyFootComponent } from './my-foot/my-foot.component';
import { MyBodyComponent } from './my-body/my-body.component';
import { MangodbnewComponentComponent } from './mangodbnew.component/mangodbnew.component.component';


export const routes: Routes = [
    { path : "old", component : MyHeadComponent},
    {path : "new2", component:MyFootComponent},
    {path : "new3", component:MyBodyComponent},
    {path :"new4", component:MangodbnewComponentComponent}
];
 