import {Component, Input} from '@angular/core';
import {Activity} from "../../entity/Activity";
@Component({
  selector: 'app-link-activity',
  templateUrl: './link-activity.component.html',
  styleUrls: ['./link-activity.component.css']
})
export class LinkActivityComponent {

  @Input() activity: Activity | null = null;
}
