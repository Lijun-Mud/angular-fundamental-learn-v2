import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { EventService } from './components/event/shared/event.service';
import { Error404Component } from './components/errors/404.component'
import { appRoutes } from './routes';
import {EventAppComponent} from './components/event/index';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        Error404Component,
        EventAppComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        ToastrModule.forRoot()
    ],
    providers: [
        EventService
    ]
})
export class AppModuleShared {
}
    