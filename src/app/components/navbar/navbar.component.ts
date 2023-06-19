import {Component} from '@angular/core';
import {UserRole} from "../../entity/UserRole";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  protected role: UserRole = UserRole.ANONYMOUS;

  protected readonly UserRole = UserRole;
}
