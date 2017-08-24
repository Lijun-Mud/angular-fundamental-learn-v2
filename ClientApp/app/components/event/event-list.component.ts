import { Component, OnInit } from '@angular/core';
//import { EventService}  from './shared/event.service';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'events-list',
    templateUrl:'./event-list.component.html'
})

export class EventsListComponent implements OnInit {
    events:any;
    constructor(private toastr:ToastrService,private rounter:ActivatedRoute) {
    }

    ngOnInit(): void {
        //this.eventService.getEvents().subscribe(events => this.events = events);
        this.events = this.rounter.snapshot.data['events'];
    }

    handleEventClick(event: any) {
        this.toastr.success(event.name);
    }
}