import { Component } from '@angular/core';
import {JwtService} from "../../../service/jwt/jwt.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-user-all-workouts-page',
  templateUrl: './user-all-workouts-page.component.html',
  styleUrls: ['./user-all-workouts-page.component.css']
})
export class UserAllWorkoutsPageComponent {
  protected username: string;
  constructor(private jwtService: JwtService, private titleService: Title) {
    this.titleService.setTitle('All workouts');
    this.username = jwtService.getUsername();
  }
}
