import { Component } from '@angular/core';
import {UserService} from "../../../service/user/user.service";
import {Title} from "@angular/platform-browser";
import {User} from "../../../entity/User";

@Component({
  selector: 'app-user-table-admin',
  templateUrl: './user-table-admin.component.html',
  styleUrls: ['./user-table-admin.component.css']
})
export class UserTableAdminComponent {
  protected users: User[] = [];
  constructor(private userService: UserService, private titleService: Title) {
    this.titleService.setTitle('Admin - User');
    this.updateUser()
  }

  updateUser(){
    this.userService.getAll().subscribe(users=>{
      this.users = users;
    });
  }
  changeRole(id: number) {
    this.userService.changeRoleById(id).subscribe(res=>{
      this.updateUser()
    });
  }

  changeActive(id: number) {
    this.userService.changeActiveById(id).subscribe(res=>{
      this.updateUser()
    });
  }
}
