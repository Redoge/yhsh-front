import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {JwtService} from "../../../service/jwt/jwt.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.css']
})
export class StatsPageComponent {
  username: string;
  constructor(private titleService: Title, private jwtService: JwtService) {
    this.titleService.setTitle("Stats");
    this.username = this.jwtService.getUsername()
  }
}
