import { RouterModule } from "@angular/router";
import {ModuleWithProviders} from "@angular/core"

import {CreateEventComponent} from "./create-event.component";
import {EventsListComponent} from "./event-list.component";
import {EventsListResolver} from "./event-list-resolver.service"
import {EventDetailComponent} from "./event-detail/event-detail.component";
import {EventRouteActivator} from "./event-detail/event-detail-route-activator";


export const eventRouting: ModuleWithProviders = RouterModule.forChild([
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
    { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator]},
])
