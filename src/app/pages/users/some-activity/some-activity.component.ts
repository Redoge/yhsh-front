import {Component, OnInit} from '@angular/core';
import {ActivityService} from 'src/app/service/activity/activity.service';
import {Activity} from "../../../entity/Activity";
import {ActivatedRoute, Router} from "@angular/router";
import {TrainingService} from 'src/app/service/training/training.service';
import {Training} from "../../../entity/Training";
import {Title} from "@angular/platform-browser";
import {GroupedTrainingsDto} from "../../../dto/GroupedTrainingsDto";
import {TrainingGrouperService} from "../../../service/util/grouper/training/training-grouper.service";

@Component({
  selector: 'app-some-activity',
  templateUrl: './some-activity.component.html',
  styleUrls: ['./some-activity.component.css']
})
export class SomeActivityComponent implements OnInit {
  protected activity: Activity | null = null;
  protected id: number;
  protected count: number = 0;
  protected loading: boolean = false;
  protected groupedTrainings: GroupedTrainingsDto[] = [];
  protected error: string = '';


  constructor(private activityService: ActivityService, private activatedRoute: ActivatedRoute, private router: Router,
              private trainingService: TrainingService, private titleService: Title, private trainingGrouper: TrainingGrouperService) {
    this.titleService.setTitle("Activity");
    this.id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
  }

  removeActivity() {
    this.loading = true;
    this.activityService.removeActivityById(this.id).subscribe(removed=>{
      this.loading = false;
      this.router.navigate(['/user/activities'])
    }, error => {
      this.error = "Something went wrong...";
    })
  }

  add() {
    this.loading = true
    this.trainingService.saveTraining(this.activity?.id, this.count).subscribe(training => {
      this.updateTrainings()
      this.loading = false
    }, err => {
      this.loading = false
    })
  }

  private updateTrainings() {
    this.loading = true;
    let res;
    this.trainingService.getTrainingsByActivityId(this.id).subscribe(trainings => {
      this.groupedTrainings = this.trainingGrouper.groupByDate(trainings)
      this.loading = false;
    });
  }
  updateActivity() {
    this.loading = true;
    this.activityService.getActivityById(this.id).subscribe(activity => {
      this.activity = activity;
      this.updateTrainings()
    }, err => {
      this.loading = false;
      this.router.navigate([''])
    }, () => {
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.updateActivity()
  }

  remove(trainingId: number) {
    this.loading = true;
    this.trainingService.removeTrainingById(trainingId).subscribe(isDeleted => {
      this.updateTrainings();
      this.loading = false;
    }, error => {
      console.log(error)
      this.loading = false;
    });
  }

  closeError() {
    this.error = ''
  }
}
