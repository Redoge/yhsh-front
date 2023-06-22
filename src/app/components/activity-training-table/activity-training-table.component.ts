import {Component, Input, OnInit} from '@angular/core';
import {Training} from "../../entity/Training";
import {Activity} from "../../entity/Activity";

@Component({
  selector: 'app-activity-training-table',
  templateUrl: './activity-training-table.component.html',
  styleUrls: ['./activity-training-table.component.css']
})
export class ActivityTrainingTableComponent implements OnInit {
@Input() activity: Activity|null = null;
protected trainings: Training[] | undefined;
   ngOnInit(): void {
    this.trainings = this.activity?.trainings;
    console.log(this.activity)
  }
}
