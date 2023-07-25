import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {WorkoutService} from "../../../service/workout/workout.service";
import {Workout} from "../../../entity/Workout";
import {TrainingService} from "../../../service/training/training.service";

@Component({
  selector: 'app-some-workout-page',
  templateUrl: './some-workout-page.component.html',
  styleUrls: ['./some-workout-page.component.css']
})
export class SomeWorkoutPageComponent {
  private id;
  protected workout: Workout | undefined;
  protected loading = false;

  constructor(private activatedRoute: ActivatedRoute, private titleService: Title, private workoutService: WorkoutService,
              private router: Router, private trainingService: TrainingService) {
    this.titleService.setTitle("Workout");
    this.id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.updateWorkout();
  }

  updateWorkout() {
    this.loading = true;
    this.workoutService.getWorkoutById(this.id).subscribe(res => {
      this.workout = res;
      this.loading = false;
    }, err => {
      this.router.navigate(["/user/workouts"])
    })
  }

  removeWorkout() {
    this.loading = true;
    this.workoutService.removeWorkoutById(<number>this.workout?.id).subscribe(success => {
      this.loading = false;
      this.router.navigate(["/user/workouts"])
    }, error => {
      this.loading = false;
      this.router.navigate(['/user/workouts']) //TODO: why error if delete
    })
  }

  removeTraining(id: number) {
    this.loading = true;
    if (this.workout?.trainings.length == 1) {
      this.removeWorkout()
    }
    this.trainingService.removeTrainingById(id).subscribe(() => {
      this.updateWorkout()
      this.loading = false;
    }, () => {
      this.loading = false;
    })

  }
}
