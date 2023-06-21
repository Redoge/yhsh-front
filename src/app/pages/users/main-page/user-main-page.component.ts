import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import {User} from "../../../entity/User";
import {UserUpdateRequestDto} from "../../../dto/UserUpdateRequestDto";
import {JwtService} from "../../../service/jwt/jwt.service";

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
  constructor(private userService: UserService, private jwtService: JwtService) {
    userService.getUser().subscribe(response=>{
      this.user = response;
      this.heightSm = response.heightSm;
      this.weightKg = response.weightKg;
      this.sex = response.sex;
    }, err => {
      this.error = err;
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
