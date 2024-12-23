import { Routes } from '@angular/router';
import { RoutelinkComponent } from './routelink/routelink.component';
import { TwoWayComponent } from './chandra/second/two.component';
import { OneWayComponent } from './chandra/one/one.component';

export const routes: Routes = [
    { path: "one", component: OneWayComponent },
    { path: "body1", component: TwoWayComponent }
];
