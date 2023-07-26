import { Component } from '@angular/core';
import {UserService} from "../../../service/user/user.service";
import {Title} from "@angular/platform-browser";
import {UserDto} from "../../../dto/UserDto";

@Component({
  selector: 'app-user-table-admin',
  templateUrl: './user-table-admin.component.html',
  styleUrls: ['./user-table-admin.component.css']
})
export class UserTableAdminComponent {
  protected users: UserDto[] = [];
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
    this.userService.changeRoleById(id).subscribe(()=>{
      this.updateUser()
    });
  }

  changeActive(id: number) {
    this.userService.changeActiveById(id).subscribe(()=>{
      this.updateUser()
    });
  }
}
