/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />

import { CounterComponent } from "./counter.component";

describe("CounterComponent", () => {
    let component: CounterComponent;
    let mockToastrService, mockEventService;
    beforeEach(() => {
        mockToastrService = jasmine.createSpyObj('mockToastrService', ['success']);
        mockEventService = jasmine.createSpyObj('mockEventService', ['getEvents']);
        component = new CounterComponent(mockToastrService, mockEventService);
    });

    describe("incrementCounter",
        () => {
            it("currentCount should increase correctly",
                () => {
                    component.incrementCounter();
                    expect(component.currentCount).toBe(1);
                });
        });

}) ;   