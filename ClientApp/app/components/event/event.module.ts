import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {FormsModule,ReactiveFormsModule} from "@angular/forms"

import {CreateEventComponent} from "./create-event.component";
import {EventsListComponent} from "./event-list.component";
import {EventsListResolver} from "./event-list-resolver.service"
import {EventDetailComponent} from "./event-detail/event-detail.component";
import {eventRouting} from "./event.routes";
import {EventService} from "./shared/event.service";
import {EventThumbnailComponent} from "./event-thumbnail";
import {EventRouteActivator} from "./event-detail/event-detail-route-activator";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        eventRouting],
    declarations: [
        EventThumbnailComponent,
        EventsListComponent,
        CreateEventComponent,
        EventDetailComponent],
    providers: [
        EventService,
        EventsListResolver,
        EventRouteActivator,
        {
           provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    exports:[]
})

export class EventModule {
    
}

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');
    return true;
}