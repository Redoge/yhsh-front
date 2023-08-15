import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivityDto} from "../../dto/ActivityDto";
import {GroupedTrainingsDto} from "../../dto/GroupedTrainingsDto";
import {ActivityService} from "../../service/activity/activity.service";
import {TrainingService} from "../../service/training/training.service";
import {TrainingGrouperService} from "../../service/util/grouper/training/training-grouper.service";
import {PaginationService} from "../../service/pagination/pagination.service";
import {Page} from "../../dto/Page";

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.css']
})
export class UserActivityComponent implements OnChanges, OnInit {
  @Input() username: string = '';
  protected activities: ActivityDto[] | undefined;
  protected errors: string = '';
  protected loading: boolean = false;
  groupedTrainings: GroupedTrainingsDto[] = [];
  private activePage = 0;
  protected page: Page<any>|undefined;

  constructor(private activityService: ActivityService, private trainingService: TrainingService,
              private trainingGrouper: TrainingGrouperService, private paginationService: PaginationService) {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['username'] && changes['username'].currentValue) {
      this.getActivity();
    }

  }
  ngOnInit(){
    this.paginationService.activePage$.subscribe(res=>{
      this.activePage = res;
      this.updateTrainings()
    });
  }
  getActivity(): void {
    this.loading = true;
    this.activityService.getActivitiesByUserUsername(this.username).subscribe(result =>{
      this.activities = result.content;
      this.loading = false;
    }, error => {
      this.errors = error.message;
      this.loading = false;
    })
    this.updateTrainings();
  }
  private updateTrainings(){
    this.loading = true;
    this.trainingService.getTrainingsByUserUsername(this.username, this.activePage-1).subscribe(res=>{
      this.page = res;
      this.groupedTrainings = this.trainingGrouper.groupByDate(res.content)
      this.loading = false;
    }, () => {
      this.loading = false;
    })
  }
}
