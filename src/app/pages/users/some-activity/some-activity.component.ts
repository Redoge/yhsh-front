import {Component, OnInit} from '@angular/core';
import {ActivityService} from 'src/app/service/activity/activity.service';
import {ActivityDto} from "../../../dto/ActivityDto";
import {ActivatedRoute, Router} from "@angular/router";
import {TrainingService} from 'src/app/service/training/training.service';
import {Title} from "@angular/platform-browser";
import {GroupedTrainingsDto} from "../../../dto/GroupedTrainingsDto";
import {TrainingGrouperService} from "../../../service/util/grouper/training/training-grouper.service";
import {TrainingDto} from "../../../dto/TrainingDto";
import {Page} from "../../../dto/Page";
import {PaginationService} from "../../../service/pagination/pagination.service";

@Component({
  selector: 'app-some-activity',
  templateUrl: './some-activity.component.html',
  styleUrls: ['./some-activity.component.css']
})
export class SomeActivityComponent implements OnInit {
  protected activity: ActivityDto | undefined;
  protected id: number;
  protected count: number = 0;
  protected loading: boolean = false;
  protected groupedTrainings: GroupedTrainingsDto[] | undefined;
  private trainings: TrainingDto[] | undefined;
  protected error: string = '';
  private activePage = 0;
  protected page: Page<any> | undefined;

  constructor(private activityService: ActivityService, private activatedRoute: ActivatedRoute, private router: Router,
              private trainingService: TrainingService, private titleService: Title, private trainingGrouper: TrainingGrouperService, private paginationService: PaginationService) {
    this.titleService.setTitle("Activity");
    this.id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.paginationService.activePage$.subscribe(res=>{
      this.activePage = res;
      this.updateTrainings()
    });
  }

  removeActivity() {
    this.loading = true;
    this.activityService.removeActivityById(this.id).subscribe(()=>{
      this.loading = false;
      this.router.navigate(['/user/activities'])
    }, () => {
      this.error = "Something went wrong...";
    })
  }

  add() {
    this.loading = true
    this.trainingService.saveTraining(this.activity?.id, this.count).subscribe(() => {
      this.updateTrainings()
      this.loading = false
    }, () => {
      this.loading = false
    })
  }
  getActivity() {
    this.loading = true;
    this.activityService.getActivityById(this.id).subscribe(activity => {
      this.activity = activity;
    }, () => {
      this.loading = false;
      this.router.navigate([''])
    }, () => {
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.updateTrainings()
    this.getActivity()
  }
  remove(trainingId: number) {
    this.loading = true;
    this.trainingService.removeTrainingById(trainingId).subscribe(() => {
      this.updateTrainings();
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

  closeError() {
    this.error = ''
  }

  private updateTrainings() {
    this.trainingService.getTrainingsByActivityId(this.id, this.activePage-1).subscribe(res=> {
      this.page = res;
      this.trainings = res.content;
      this.groupedTrainings = this.trainingGrouper.groupByDate(<TrainingDto[]>this.trainings)
    }, error=>{
      console.log(error)
      this.error = 'Something went wrong';
    })
  }
}
