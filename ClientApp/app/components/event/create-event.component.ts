﻿import {Component} from '@angular/core';
import { Router } from '@angular/router';

import {EventService} from "./shared/event.service";

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
    `]
})

export class CreateEventComponent {
    isDirty:boolean=true;
    constructor(private rounter: Router,private  eventService:EventService) {
        
    }

    saveEvent(formValues: any) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.rounter.navigate(['events']);
    }

    cancel() {
        this.rounter.navigate(['events']);
    }
}