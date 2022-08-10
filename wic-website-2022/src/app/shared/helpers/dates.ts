import { WeekDay } from "@angular/common";

export type timePeriod = { start: Date, end: Date }

export function getNextDayOfWeek(date: Date, dayOfWeek: WeekDay) {
    var resultDate = new Date(date.getTime());
    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
    return resultDate;
}
