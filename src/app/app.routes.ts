import { Routes } from '@angular/router';
import { OneWayComponent } from './chandra/one/one.component';
import { TwoWayComponent } from './chandra/second/two.component';
import { BuiltDirComponent } from './chandra/Structural/built_dir';
import { ConsumeApiComponent } from './chandra/consume-api/consume-api.component';
import { MongoConnectService } from './chandra/Services/mongodb-connect-services-new.service';

export const routes: Routes = [
    { path: "one", component: OneWayComponent },
    { path: "body1", component: TwoWayComponent },
    { path: "dir", component: BuiltDirComponent },
    { path: "consume", component: ConsumeApiComponent },
    { path: "apimongoservice", component: MongoConnectService }
];
