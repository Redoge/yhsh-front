import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { User } from "../../entity/User";

@Component({
  selector: 'app-main-user',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnChanges {
  @Input() username: string = '';
  protected user: User|null = null;
  protected error: string = '';
  protected heightSm: number = 0;
  protected weightKg: number = 0 ;
  protected sex: string = '';
  protected bmi: number = 0;
  protected loading = true;

  constructor(private userService: UserService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['username'] && changes['username'].currentValue) {
      this.getUserByUsername();
    }
  }

  getUserByUsername() {
    this.userService.getUserByUsername(this.username).subscribe(
      response => {
        this.mapFieldByUserResponse(response);
        this.loading = false;
      },
      err => {
        this.error = err;
        this.loading = false;
      }
    );
  }

  updateUser() {
    this.loading = true;
    this.userService.updateUser(this.username, this.heightSm, this.weightKg, this.sex).subscribe(
      response => {
        this.mapFieldByUserResponse(response);
        this.loading = false;
      },
      err => {
        this.loading = false;
        this.error = err;
      }
    );
  }
  private mapFieldByUserResponse(user: User){
    this.user = user;
    this.heightSm = user.heightSm;
    this.weightKg = user.weightKg;
    this.sex = user.sex;
    this.bmi = this.userService.calculateBmi(this.heightSm, this.weightKg);
  }

  protected readonly Boolean = Boolean;
}
