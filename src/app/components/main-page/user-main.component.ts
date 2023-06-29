import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { User } from "../../entity/User";

@Component({
  selector: 'app-main-user',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnChanges {
  @Input() username: string = '';
  protected user: User|null = null;
  protected error: string = '';
  protected heightSm: number = 0;
  protected weightKg: number = 0 ;
  protected sex: string = '';
  protected loading: boolean;

  constructor(private userService: UserService) {
    this.loading = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['username'] && changes['username'].currentValue) {
      this.getUserByUsername();
    }
  }

  getUserByUsername() {
    this.userService.getUserByUsername(this.username).subscribe(
      response => {
        this.user = response;
        this.heightSm = response.heightSm;
        this.weightKg = response.weightKg;
        this.sex = response.sex;
        this.loading = false;
      },
      err => {
        this.error = err;
        this.loading = false;
      }
    );
  }

  updateUser() {
    this.userService.updateUser(this.username, this.heightSm, this.weightKg, this.sex).subscribe(
      response => {
        this.user = response;
        this.heightSm = response.heightSm;
        this.weightKg = response.weightKg;
        this.sex = response.sex;
      },
      err => {
        this.error = err;
      }
    );
  }
}
