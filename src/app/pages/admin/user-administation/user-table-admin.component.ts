import {Component} from '@angular/core';
import {UserService} from "../../../service/user/user.service";
import {Title} from "@angular/platform-browser";
import {UserDto} from "../../../dto/UserDto";
import {Page} from "../../../dto/Page";
import {PaginationService} from "../../../service/pagination/pagination.service";

@Component({
  selector: 'app-user-table-admin',
  templateUrl: './user-table-admin.component.html',
  styleUrls: ['./user-table-admin.component.css']
})
export class UserTableAdminComponent {
  protected users: UserDto[] = [];
  private activePage = 0;
  protected page: Page<any> | undefined;

  constructor(private userService: UserService, private titleService: Title, private paginationService: PaginationService) {
    this.titleService.setTitle('Admin - User');
    this.paginationService.activePage$.subscribe(res => {
      this.activePage = res;
      this.updateUser()
    });
  }

  updateUser() {
    this.userService.getAll(this.activePage - 1).subscribe(users => {
      this.page = users
      this.users = users.content;
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
