import {Injectable} from '@angular/core';
import {ActivityTypeDto} from "../../dto/ActivityTypeDto";

@Injectable({
  providedIn: 'root'
})
export class ActivityTypeService {

  constructor() {
  }

  public getAllActivityTypes(): ActivityTypeDto[] {
    let Time: ActivityTypeDto = {name: "Time", notation: "sec"}
    let Quantity: ActivityTypeDto = {name: "Quantity", notation: "times"}
    let Distance: ActivityTypeDto = {name: "Distance", notation: "meters"}
    return [Time, Quantity, Distance]
  }
}
