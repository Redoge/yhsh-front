import {Component, OnInit, ViewChild} from '@angular/core';
import {WorkoutService} from "../../../service/workout/workout.service";
import {ActivityService} from "../../../service/activity/activity.service";
import {JwtService} from "../../../service/jwt/jwt.service";
import {ActivityDto} from "../../../dto/ActivityDto";
import {TrainingIntoWorkoutSaveDto} from "../../../dto/TrainingIntoWorkoutSaveDto";
import {WorkoutSaveDto} from "../../../dto/WorkoutSaveDto";
import {Router} from "@angular/router";
import {ActivityTypeDto} from "../../../dto/ActivityTypeDto";
import {StopwatchComponent} from "../../../components/stopwatch/stopwatch.component";
@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.css']
})
export class NewWorkoutComponent implements OnInit{
  protected activities: ActivityDto[] = [];
  protected workout: WorkoutSaveDto|undefined;
  protected username: string;
  protected activityId: number = 0;
  protected count = 0;
  protected trainings: TrainingIntoWorkoutSaveDto[] = [];
  protected trainingsForShow: { name: String, count: number, weight:number }[] = [];
  protected name: String = '';
  protected startTime: Date | undefined;
  protected loading = false;
  protected error = '';
  protected weight = 0;
  protected pickedWithWeights: boolean = false;
  protected pickedActivityType: ActivityTypeDto  = {name:'~', notation: '~'};
  @ViewChild(StopwatchComponent) stopwatch: any;

  constructor(private workoutService: WorkoutService, private activityService: ActivityService, private jwtService: JwtService,
              private router: Router) {
    this.username = jwtService.getUsername();
  }

  ngOnInit(): void {
    this.loading = true;
    this.activityService.getActivitiesByUserUsername(this.username).subscribe(activities => {
      this.loading = false;
      this.activities = activities.content;
    }, ()=>{
      this.loading = false;
    })
  }

  addActivity() {
    if (this.activityId > 0 && this.count > 0) {
      let trainingDto: TrainingIntoWorkoutSaveDto = {
        activityId: this.activityId,
        count: this.count,
        startTime: new Date,
        weight: this.weight
      };
      this.trainings.push(trainingDto);
      if (this.trainings.length == 1) {
        this.startTime = new Date();
      }
      this.trainingsForShow.push({name: this.getActivityNameById(this.activityId).name, count: this.count, weight: this.weight})
    }
  }
  getActivityNameById(id: number) {
    return this.activities.find(a => a.id == id) || {name: ''};
  }

  saveWorkout() {
    if (this.name.length > 0 && this.trainings.length > 0) {
      this.workout = {
        trainings: this.trainings,
        username: this.username,
        name: <string>this.name,
        startTime: <Date>this.startTime,
        endTime: new Date()
      }
      this.loading = true;
      this.workoutService.saveWorkout(this.workout).subscribe(()=>{
        this.loading = false;
        this.router.navigate(['/user/workouts'])
      }, ()=>{
        this.loading = false;
      })
    }else{
      this.error = "Name and trainings list can't be empty!!"
    }
  }
  protected updateChangedActivity(){
    let pickedActivity = this.activities.find(s => s.id == this.activityId)
    if (pickedActivity != undefined){
      this.pickedWithWeights = pickedActivity.withWeight
      this.pickedActivityType = pickedActivity.type
    }
  }

  closeError() {
    this.error = ''
  }
  addFromStopwatch(): void {
    this.count = this.stopwatch.seconds;
    this.stopwatch.reset()
  }
}
