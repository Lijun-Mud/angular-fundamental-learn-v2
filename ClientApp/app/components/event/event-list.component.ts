import { Component, OnInit } from '@angular/core';
import { EventService}  from './shared/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'events-list',
    templateUrl:'./event-list.component.html'
})

export class EventsListComponent implements OnInit {
    events:any[];
    constructor(private eventService: EventService,private toastr:ToastrService) {
    }

    ngOnInit(): void {
        this.events = this.eventService.getEvents();
    }

    handleEventClick(event: any) {
        this.toastr.success(event.name);
    }
}