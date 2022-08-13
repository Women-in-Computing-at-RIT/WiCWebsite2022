import * as dH from "@app/shared/helpers/dates";
import { WeekDay } from "@angular/common";
import Link from "@app/shared/models/inputs/link";


export class EventListItem {
    title: string;
    location?: string;
    link?: Link;
    start: Date;
    end: Date;
    recurring: boolean;



    constructor(title: string, eventTime: dH.timePeriod, location?: string, link?: Link, recurring = false) {
        this.title = title;
        this.link = link;
        this.location = location;
        this.recurring = recurring;
        this.start = eventTime.start;
        this.end = eventTime.end;
        if (this.start.getTime() > this.end.getTime()) {
            throw new Error('End time cannot be earlier than start time!')
        }

        if (recurring) {
            this.start = dH.getNextDayOfWeek(new Date(), eventTime?.start.getDay());
        }
    }
}