import {Component, OnInit} from '@angular/core';
import {ActivityService} from 'src/app/service/activity/activity.service';
import {TrainingService} from 'src/app/service/training/training.service';
import {Activity} from "../../../entity/Activity";
import {Title} from "@angular/platform-browser";
import {TrainingGrouperService} from "../../../service/util/grouper/training/training-grouper.service";
import {GroupedTrainingsDto} from "../../../dto/GroupedTrainingsDto";

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.css']
})
export class MyActivityComponent implements OnInit{
  protected activities: Activity[] = [];
  protected errors: string = '';
  protected loading: boolean = true;
  groupedTrainings: GroupedTrainingsDto[] = [];

  constructor(private activityService: ActivityService, private trainingService: TrainingService,
              private titleService: Title, private trainingGrouper: TrainingGrouperService) {
    this.titleService.setTitle('My activities');

  }

  ngOnInit(): void {
    this.loading = true;

    this.activityService.getActivities().subscribe(result =>{
      this.activities = result;
    }, error => {
      this.errors = error.message;
      this.loading = false;
    }, ()=> {
      this.loading = false;
    });
    this.updateTrainings();
  }
  private updateTrainings(){
    this.loading = true;
    this.trainingService.getTrainings().subscribe(res=>{
      this.groupedTrainings = this.trainingGrouper.groupByDate(res)
      this.loading = false;
    })
  }

}
