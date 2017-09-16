import { Component, Input,OnChanges } from '@angular/core'
import { ISession } from "../shared/event.model"

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    currentSessions: ISession[];

    ngOnChanges(changes: Object): void {
        if (this.sessions) {
            if (this.filterBy.toLowerCase() === "all") {
                this.currentSessions = this.sessions.slice(0);
            } else {
                this.currentSessions = this.sessions.filter(x => x.level.toLowerCase() === this.filterBy);
            }
            this.sortBy === 'name' ? this.currentSessions.sort(sortByNameAsc) : this.currentSessions.sort(sortByVotesDesc);
        }
    }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}