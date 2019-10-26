import { SectorType } from '../providers/sectors'

export enum TimeBlockType {
  "PASSENGER_START",
  "STR_ENTRANCE",
  "PUBLIC_TRAIN",
  "PUBLIC_BUS",
  "PRIVATE_VEHICLE",
  "STR_INFO_CENTER",
  "STR_ATM",
  "STR_RESTAURANTS",
  "STR_SHOPPING",
  "STR_SERVICE",
  "STR_SECURITY",
  "STR_GATE",
  "STR_CHECKIN",
  "PASSENGER_END"
}

// A time block represents a time space where passenger actions can be performed.
export class TimeBlockClass {
  
  id: number;
  type: TimeBlockType;
  isEditable: boolean;
  sector: SectorType;
  duration_minutes: number;

  constructor (_id: number,
               _type: TimeBlockType,
               _sector: SectorType,
               _duration_minutes: number,
               _isEditable: boolean = true) {
    this.id = _id;
    this.type = _type;
    this.sector = _sector;
    this.duration_minutes = _duration_minutes;
    this.isEditable = _isEditable;
  }

}
