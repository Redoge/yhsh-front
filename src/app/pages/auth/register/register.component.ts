import { Component } from '@angular/core';
import {AuthService} from "../../../service/auth/auth.service";
import {JwtService} from "../../../service/jwt/jwt.service";
import {Router} from "@angular/router";
import {NavbarUpdateListenerService} from "../../../service/navbar/navbar-update-listener.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private jwtService: JwtService, private router: Router, private navbarService: NavbarUpdateListenerService) {
  }
  register() {
    this.authService.register(this.username, this.email, this.password).subscribe(
      response => {
        this.jwtService.saveToken(response.token);
        this.navbarService.triggerUpdateNavbar();
        this.router.navigate(['']);
      }, error => {
        console.log(error.error.message)
        this.error = error.error.message;
      }
    )
  }
  closeError() {
    this.error = '';
  }
}
