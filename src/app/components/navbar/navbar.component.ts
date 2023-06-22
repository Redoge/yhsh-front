import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {NavbarUpdateListenerService} from 'src/app/service/navbar/navbar-update-listener.service';
import {UserRole} from "../../entity/UserRole";
import {JwtService} from "../../service/jwt/jwt.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  protected role: UserRole;
  constructor(private jwtService: JwtService, private navbarService: NavbarUpdateListenerService, private router: Router) {
    this.role = jwtService.getUserRole();
  }
  ngOnInit() {
    this.navbarService.updateNavbar$.subscribe(() => {
      this.role = this.jwtService.getUserRole();
    });
  }

  logout() {
    this.jwtService.removeToken();
    this.role = UserRole.ANONYMOUS;
    this.router.navigate(['']);
  }
  protected readonly UserRole = UserRole;

}
