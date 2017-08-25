import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {EventService} from '../shared/event.service';

@Component({
    selector: 'event-detail',
    templateUrl: './event-detail.component.html',
    styles: [`
        .container { padding-left:20px; padding-right:20px; }
        .event-image { height: 100px; }
    `
    ]
})

export class EventDetailComponent implements OnInit {
    event:any;
    constructor(private eventService: EventService,private router:ActivatedRoute) {
        
    }

    ngOnInit(): void {
        this.event = this.eventService.getEvent(+this.router.snapshot.params['id']);
    }
}