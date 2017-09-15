import { Routes } from '@angular/router';

import { Error404Component } from './components/errors/404.component';
import {UserModule} from "./components/user/user.module";

export const appRoutes: Routes = [
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: '404', component: Error404Component },
    //{ path: 'user', loadChildren:()=>UserModule},
    { path: 'user', loadChildren: './components/user/user.module#UserModule' },
]