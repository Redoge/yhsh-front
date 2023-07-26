import {Component, Input} from '@angular/core';
import {ActivityDto} from "../../dto/ActivityDto";

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent {
  @Input() activity: ActivityDto | null = null;
}
