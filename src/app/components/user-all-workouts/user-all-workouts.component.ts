import {Component, Input, SimpleChanges} from '@angular/core';
import {WorkoutService} from "../../service/workout/workout.service";
import {Workout} from "../../entity/Workout";

@Component({
  selector: 'app-user-all-workouts',
  templateUrl: './user-all-workouts.component.html',
  styleUrls: ['./user-all-workouts.component.css']
})
export class UserAllWorkoutsComponent {
  @Input() username: string = '';
  protected workouts: Workout[] | undefined;
  protected loading = false;
  constructor(private workoutService: WorkoutService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['username'] && changes['username'].currentValue) {
      this.updateAllWorkoutByUserUsername();
    }
  }


  private updateAllWorkoutByUserUsername() {
    this.loading = true;
    this.workoutService.getAllWorkoutsByUsername(this.username).subscribe((response) => {
      this.workouts = response;
      this.loading = false;
    }, err=>{
      this.loading = false;
    });
  }

}
