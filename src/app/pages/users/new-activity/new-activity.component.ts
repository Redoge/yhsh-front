import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ActivityService} from 'src/app/service/activity/activity.service';
import {JwtService} from "../../../service/jwt/jwt.service";
import {Title} from "@angular/platform-browser";
import {ActivityTypeService} from "../../../service/activityType/activity-type.service";

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent {

  protected typeName: string = '';
  protected name: string = '';
  protected username: string;
  protected error: string =  '';
  protected withWeight = false;
  protected activityTypes;

  constructor(jwtService: JwtService, private activityService: ActivityService, private router: Router,
              private titleService: Title, activityTypeService: ActivityTypeService) {
    this.activityTypes = activityTypeService.getAllActivityTypes()
    this.titleService.setTitle('New activity');
    this.username = jwtService.getUsername();
  }

  newActivity() {
    this.activityService.createActivity(this.name, this.typeName, this.username, this.withWeight).subscribe(result => {
      this.router.navigate(['/user/activities'])
    }, err => {
      this.error = "Activity " + this.name + " not created!!!"
    })
  }

  closeError() {
    this.error = '';
  }
}
