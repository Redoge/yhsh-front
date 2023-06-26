import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import {User} from "../../../entity/User";
import {JwtService} from "../../../service/jwt/jwt.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-main-page',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.css']
})
export class UserMainPageComponent {
  protected user: User|null = null;
  protected error: string =  '';
  protected heightSm: number = 0;
  protected weightKg: number = 0 ;
  protected sex: string = '';
  protected loading: boolean;
  constructor(private userService: UserService, private jwtService: JwtService, private titleService: Title) {
    this.titleService.setTitle('Profile');
    this.loading = true;
    userService.getUser().subscribe(response=>{
      this.user = response;
      this.heightSm = response.heightSm;
      this.weightKg = response.weightKg;
      this.sex = response.sex;
    }, err => {
      this.error = err;
      this.loading = false;
    }, ()=>{
      this.loading = false;
    });
  }

  updateUser() {
        let username= this.jwtService.getUsername();
        this.userService.updateUser(username, this.heightSm, this.weightKg, this.sex ).subscribe(response=>{
          this.user = response;
          this.heightSm = response.heightSm;
          this.weightKg = response.weightKg;
          this.sex = response.sex;
        }, err => {
          this.error = err;
        });

  }
}
