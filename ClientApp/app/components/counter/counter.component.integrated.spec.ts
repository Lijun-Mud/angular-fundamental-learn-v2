/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />

import { TestBed, ComponentFixture,async } from "@angular/core/testing";

import { ToastrService } from 'ngx-toastr';
import { EventService } from './../event/shared/event.service';

import { CounterComponent } from './counter.component';

describe("CounterComponent",() => {
    let fixture: ComponentFixture<CounterComponent>;
    
    beforeEach(() => {
        let mockToastrService = {
            success:(message:string)=>{}
        };
        let mockEventService = {
            getEvents: () => {}
        };
        TestBed.configureTestingModule({
            imports: [],
            declarations: [CounterComponent],
            providers: [
                { provide: ToastrService, useValue: mockToastrService },
                { provide: EventService, useValue: mockEventService },
            ]
        });

        fixture = TestBed.createComponent(CounterComponent);
    });

    describe("initial display",() => {
        it("should display a title", async(() => {
            const title = fixture.nativeElement.querySelector("h1").textContent;
            expect(title).toBe("Counter");
        }));
    });
});