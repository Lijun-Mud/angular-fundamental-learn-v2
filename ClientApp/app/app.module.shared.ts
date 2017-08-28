import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { Error404Component } from './components/errors/404.component'
import { appRoutes } from './routes';

import {EventModule} from "./components/event/event.module";

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        Error404Component,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        EventModule,
        ToastrModule.forRoot(),
    ]
})
export class AppModuleShared {

}
