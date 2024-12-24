import { Routes } from '@angular/router';
import { MyBodyComponent } from './my-body/my-body.component';
import { MyBodyLokaComponent } from './my_bodyLoka/my_body_loka_component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { ApiConsumeComponent } from './api-consume/api-consume.component';

export const routes: Routes = [
    { path : "body" , component : MyBodyComponent },
    { path : "body1" , component : MyBodyLokaComponent },
    { path : "observables" , component : TestObservableComponent },
    { path : "apitest" , component : ApiConsumeComponent }
];
