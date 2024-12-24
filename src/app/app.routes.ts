import { Routes } from '@angular/router';
import { RoutelinkComponent } from './routelink/routelink.component';
import { TwoWayComponent } from './chandra/second/two.component';
import { OneWayComponent } from './chandra/one/one.component';
import { BuiltDirComponent } from './chandra/Structural/built_dir';
import { ConsumeApiComponent } from './chandra/consume-api/consume-api.component';


export const routes: Routes = [
    { path: "one", component: OneWayComponent },
    { path: "body1", component: TwoWayComponent },
    { path: "dir", component: BuiltDirComponent },
    { path: "consume", component: ConsumeApiComponent }
];
