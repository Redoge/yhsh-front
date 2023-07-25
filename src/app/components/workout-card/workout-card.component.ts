import {Component, Input} from '@angular/core';
import {Workout} from "../../entity/Workout";

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.css']
})
export class WorkoutCardComponent {
  @Input() workout: Workout|undefined;
}
