import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { EventService } from './components/event/shared/event.service';
import { Error404Component } from './components/errors/404.component'
import { appRoutes } from './routes';
import {
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventsListResolver,
    EventDetailComponent,
    EventRouteActivator,
} from './components/event/index';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        Error404Component,
        EventsListComponent,
        EventThumbnailComponent,
        CreateEventComponent,
        EventDetailComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        ToastrModule.forRoot()
    ],
    providers: [
        EventService,
        EventsListResolver,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ]
})
export class AppModuleShared {

}

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');
    return true;
}