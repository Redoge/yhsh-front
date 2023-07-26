import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ActivityDto} from "../../dto/ActivityDto";
import {GroupedTrainingsDto} from "../../dto/GroupedTrainingsDto";
import {ActivityService} from "../../service/activity/activity.service";
import {TrainingService} from "../../service/training/training.service";
import {TrainingGrouperService} from "../../service/util/grouper/training/training-grouper.service";

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.css']
})
export class UserActivityComponent implements OnChanges {
  @Input() username: string = '';
  protected activities: ActivityDto[] | undefined;
  protected errors: string = '';
  protected loading: boolean = false;
  groupedTrainings: GroupedTrainingsDto[] = [];
  constructor(private activityService: ActivityService, private trainingService: TrainingService,
              private trainingGrouper: TrainingGrouperService) {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['username'] && changes['username'].currentValue) {
      this.getActivity();
    }
    console.log('ua ' + this.username);
  }
  getActivity(): void {
    console.log(this.username)
    this.loading = true;
    this.activityService.getActivitiesByUserUsername(this.username).subscribe(result =>{
      this.activities = result;
      this.loading = false;
    }, error => {
      this.errors = error.message;
      this.loading = false;
    })
    this.updateTrainings();
  }
  private updateTrainings(){
    this.loading = true;
    this.trainingService.getTrainingsByUserUsername(this.username).subscribe(res=>{
      this.groupedTrainings = this.trainingGrouper.groupByDate(res)
      this.loading = false;
    }, () => {
      this.loading = false;
    })
  }
}
