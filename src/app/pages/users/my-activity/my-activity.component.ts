import { Component } from '@angular/core';
import { ActivityService } from 'src/app/service/activity/activity.service';
import { TrainingService } from 'src/app/service/training/training.service';
import {Activity} from "../../../entity/Activity";
import {Training} from "../../../entity/Training";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.css']
})
export class MyActivityComponent {
  protected activities: Activity[] = [];
  protected errors: string = '';
  protected loading: boolean;
  trainings: Training[] = [];

  constructor(private activityService: ActivityService, private trainingService: TrainingService, private titleService: Title) {
    this.titleService.setTitle('My activities');
    this.loading = true;
    activityService.getActivities().subscribe(result =>{
        this.activities = result;
    }, error => {
      this.errors = error.message;
      this.loading = false;
    }, ()=> {
      this.loading = false;
    });
    this.loading = true;
    this.trainingService.getTrainings().subscribe(res=>{
      this.trainings = res
    })
  }


}
