import {Component, OnInit} from '@angular/core';
import {WorkoutService} from "../../../service/workout/workout.service";
import {ActivityService} from "../../../service/activity/activity.service";
import {JwtService} from "../../../service/jwt/jwt.service";
import {Activity} from "../../../entity/Activity";
import {TrainingIntoWorkoutSaveDto} from "../../../dto/TrainingIntoWorkoutSaveDto";
import {WorkoutSaveDto} from "../../../dto/WorkoutSaveDto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.css']
})
export class NewWorkoutComponent implements OnInit {
  protected activities: Activity[] = [];
  protected workout: WorkoutSaveDto|undefined;
  protected username: string;
  protected activityId: number = 0;
  protected count = 0;
  protected trainings: TrainingIntoWorkoutSaveDto[] = [];
  protected trainingsForShow: { name: String, count: number }[] = [];
  protected name: String = '';
  protected startTime: Date | undefined;
  protected loading = false;

  constructor(private workoutService: WorkoutService, private activityService: ActivityService, private jwtService: JwtService,
              private router: Router) {
    this.username = jwtService.getUsername();
  }

  ngOnInit(): void {
    this.loading = true;
    this.activityService.getActivitiesByUserUsername(this.username).subscribe(activities => {
      this.loading = false;
      this.activities = activities;
    }, ()=>{
      this.loading = false;
    })
  }

  addActivity() {
    if (this.activityId > 0 && this.count > 0) {
      let trainingDto: TrainingIntoWorkoutSaveDto = {
        activityId: this.activityId,
        count: this.count,
        startTime: new Date
      };
      this.trainings.push(trainingDto);
      if (this.trainings.length == 1) {
        this.startTime = new Date();
      }
      this.trainingsForShow.push({name: this.getActivityNameById(this.activityId).name, count: this.count})
    }
  }

  getActivityNameById(id: number) {
    return this.activities.find(a => a.id == id) || {name: ''};
  }

  saveWorkout() {
    if (this.name.length > 3 && this.trainings.length > 0) {
      this.workout = {
        trainings: this.trainings,
        username: this.username,
        name: <string>this.name,
        startTime: <Date>this.startTime,
        endTime: new Date()
      }
      this.loading = true;
      this.workoutService.saveWorkout(this.workout).subscribe(workout=>{
        this.loading = false;
        this.router.navigate(['/user/workouts'])
      }, ()=>{
        this.loading = false;
      })
    }
  }

}
