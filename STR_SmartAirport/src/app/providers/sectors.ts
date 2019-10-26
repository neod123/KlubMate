import { MinLengthValidator } from '@angular/forms';

export enum SectorType {
  "PASSENGER_HOME",
  "TRANSPORTATION",
  "STR_VICINITY",
  "STR_PUBLIC_SPACE",
  "STR_SECURE_SPACE",
  //"AIRPORT_INTERNATIONAL_SPACE",
  "STR_TAKEOFF",
  "PASSENGER_DESTINATION" // Last element.
}

// A sector represents a zone where the passenger may perform actions such as adding a time block.
export class SectorClass {
  
  constructor () {}

  // Return next sector for time blocks assignment.
  getNext(_currentSector: SectorType): SectorType {
    return Math.min(_currentSector + 1, SectorType.PASSENGER_DESTINATION);
  }

}
