import { Injectable } from '@angular/core'

import { TimeBlockClass, TimeBlockType } from '../classes/timeBlock';
import { SectorType } from './sectors';

@Injectable()
export class TimeBlockProvider {

  timeBlocksList: Array<TimeBlockClass> = [];

  // Some basic time blocks are required.
  constructor () {
    // Passenger journey start point.
    // todo: revert with PASSENGER_START to get the whole journey.
    this.addTimeBlock(TimeBlockType.STR_ENTRANCE, SectorType.STR_PUBLIC_SPACE, 30, false);
    // Transportation to airport.
    this.addTimeBlock(TimeBlockType.STR_GATE, SectorType.STR_SECURE_SPACE, 20, false);
    // Passenger journey end point.
    this.addTimeBlock(TimeBlockType.PASSENGER_END, SectorType.PASSENGER_DESTINATION, 1, false);
  }

  // Insert a time block in the passenger's journey.
  addTimeBlock (_type: TimeBlockType, _sector: SectorType, _duration_minutes: number, _isEditable: boolean = true, _position: number = this.timeBlocksList.length) {
    this.timeBlocksList.splice(_position, 0, new TimeBlockClass(_position, _type, _sector, _duration_minutes, _isEditable));
  }

  // Return an array with all time blocks. User specific time blocks can be selected.
  getTimeBlocks (_isUserEditable: boolean = true) {
    return this.timeBlocksList.filter(
      block => block.isEditable === _isUserEditable
    );
  }

}
