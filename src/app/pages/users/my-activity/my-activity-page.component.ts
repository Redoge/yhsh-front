import {Component} from '@angular/core';
import {JwtService} from "../../../service/jwt/jwt.service";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity-page.component.html',
  styleUrls: ['./my-activity-page.component.css']
})
export class MyActivityPageComponent {
  protected username: string;
  constructor(private jwtService: JwtService, private titleService: Title) {
    this.titleService.setTitle('My activity');
    this.username = jwtService.getUsername();
  }
}
