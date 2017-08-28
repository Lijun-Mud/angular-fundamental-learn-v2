import { Routes } from '@angular/router';

import {
    EventsListComponent,
    CreateEventComponent,
    EventsListResolver,
    EventDetailComponent,
    EventRouteActivator,
    } from './components/event/index';

import { Error404Component } from './components/errors/404.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
    { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator]},
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren:'./components/user/user.module#UserModule'},
    {path:'',redirectTo:'/events',pathMatch:'full'}
]