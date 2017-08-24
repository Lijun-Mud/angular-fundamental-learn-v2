import { Routes } from '@angular/router';

import {
    EventsListComponent,
    CreateEventComponent,
    EventsListResolver,
    } from './components/event/index';

import { Error404Component } from './components/errors/404.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
    { path: '404', component: Error404Component },
    {path:'',redirectTo:'/events',pathMatch:'full'}
]