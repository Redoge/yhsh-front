import { Component } from '@angular/core';
import {JwtService} from "../../../service/jwt/jwt.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent {
  protected username: string;
  constructor(private jwtService: JwtService, private titleService: Title) {
    this.titleService.setTitle('Profile');
    this.username = jwtService.getUsername();
  }
}
