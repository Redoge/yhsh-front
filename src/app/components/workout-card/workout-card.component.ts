import {Component, Input} from '@angular/core';
import {Workout} from "../../dto/Workout";

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.css']
})
export class WorkoutCardComponent {
  @Input() workout: Workout|undefined;
}
