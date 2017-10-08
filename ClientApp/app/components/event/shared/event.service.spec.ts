///<reference path="../../../../../node_modules/@types/jasmine/index.d.ts"/>

import { EventService } from "./event.service";
import {Observable} from "rxjs/Rx";

describe("EventService",() => {
    let service: EventService;
    let mockHttp:any;
    const baseUrl = "http://localhost";

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
        service = new EventService(mockHttp, baseUrl);
    });

    describe("getEvents",
        () => { 
            it("should call http.get with the right url",
                () => {
                    mockHttp.get.and.returnValue(Observable.of(false));
                    service.getEvents();
                    expect(mockHttp.get).toHaveBeenCalledWith(`${baseUrl}/api/events`);
                });
        });
});