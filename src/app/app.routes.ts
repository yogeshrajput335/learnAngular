import { Routes } from '@angular/router';
import { RoutelinkComponent } from './routelink/routelink.component';
import { MyHeadComponent } from './my-head/my-head.component';

export const routes: Routes = [
    {path:"routelink", component:RoutelinkComponent},
    {path:"head",component:MyHeadComponent}
];

