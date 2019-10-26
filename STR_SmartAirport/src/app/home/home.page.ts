import { Component } from '@angular/core';
import { TimeBlockProvider } from '../providers/timeBlocks'
import { TimeBlockClass } from '../classes/timeBlock'

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    FACTOR_MIN_PX = 5;
    time:number = 3 * 60;
    boarding:number = 100;
    timeBlocksList: Array<TimeBlockClass> = [];

    constructor(private timeblockProv: TimeBlockProvider) {
        this.timeBlocksList = this.timeblockProv.getTimeBlocks(false);
    }

    private timeToPx(time:number):string
    {
        return (time * this.FACTOR_MIN_PX).toString() + "px";
    }

    ngAfterViewInit() {
        setTimeout(() => {
            let elem: HTMLElement;
            elem = document.getElementById('container');
            elem.style.setProperty("width", this.timeToPx(this.time));

            elem = document.getElementById('gate');
            elem.style.setProperty("left", this.timeToPx(this.time - this.timeBlocksList[1].duration_minutes));            
        }, 500);
    }
}
