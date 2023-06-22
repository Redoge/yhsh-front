import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/service/activity/activity.service';
import {JwtService} from "../../../service/jwt/jwt.service";

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.css']
})
export class NewActivityComponent {

  protected notation: string = '';
  protected name: string = '';
  protected username: string;
  protected error: string =  '';
  constructor(private jwtService: JwtService, private activityService: ActivityService, private router: Router) {
    this.username = jwtService.getUsername();
  }
  newActivity() {
    this.activityService.createActivity(this.name, this.notation, this.username).subscribe(result=>{
      this.router.navigate(['/user/activities'])
    },err=>{
      this.error = "Activity "+this.name+" not created!!!"
    })
  }

  closeError() {
    this.error = '';
  }
}
