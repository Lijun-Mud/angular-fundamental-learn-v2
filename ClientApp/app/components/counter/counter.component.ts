import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventService } from './../event/shared/event.service';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    constructor(private toastr: ToastrService, private eventService: EventService) {
    }

    public currentCount = 0;

    public incrementCounter() {
        this.toastr.success(this.currentCount.toString()+"\t!"+ this.eventService.getEvents());
        this.currentCount++;
    }
}
