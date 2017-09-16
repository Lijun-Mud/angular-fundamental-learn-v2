import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { EventService } from '../shared/event.service';
import { ISession,IEvent } from "../shared/event.model";

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
    event: IEvent;
    addMode: boolean = false;
    filterBy: string = "all";
    sortBy: string ="votes";

    constructor(private eventService: EventService,private router:ActivatedRoute) {
        
    }

    ngOnInit(): void {
        this.event = this.eventService.getEvent(+this.router.snapshot.params['id']);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}