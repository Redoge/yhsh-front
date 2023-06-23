import {Component, OnInit} from '@angular/core';
import {ActivityService} from 'src/app/service/activity/activity.service';
import {Activity} from "../../../entity/Activity";
import {ActivatedRoute, Router} from "@angular/router";
import {TrainingService} from 'src/app/service/training/training.service';
import {Training} from "../../../entity/Training";

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
  protected trainings: Training[] = [];
  protected error: string = '';


  constructor(private activityService: ActivityService, private activatedRoute: ActivatedRoute, private router: Router,
              private trainingService: TrainingService) {
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
      this.trainings.unshift(training)
      this.loading = false
    }, err => {
      this.loading = false
    })

  }

  updateActivity() {
    this.loading = true;
    this.activityService.getActivityById(this.id).subscribe(activity => {
      this.activity = activity;
      this.trainings = activity.trainings.filter(t=>!t.removed)
        .sort((a,b)=>
          new Date(b.startTime).getTime()-new Date(a.startTime).getTime());
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
      if (isDeleted) {
        this.trainings = this.trainings.filter(t => t.id !== trainingId)
      }
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
