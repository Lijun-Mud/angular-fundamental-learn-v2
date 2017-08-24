import { Routes } from '@angular/router';

import {
    EventAppComponent
    } from './components/event/index';

import { Error404Component } from './components/errors/404.component';

export const appRoutes: Routes = [
    {path:'events',component:EventAppComponent},
    { path: '404', component: Error404Component },
    {path:'',redirectTo:'/events',pathMatch:'full'}
]