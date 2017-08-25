import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./create-event.component.html'
})

export class CreateEventComponent {
    isDirty:boolean=true;
    constructor(private rounter: Router) {
        
    }

    cancel() {
        this.rounter.navigate(['events']);
    }
}