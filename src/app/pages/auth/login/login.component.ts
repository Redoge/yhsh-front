import {Component} from '@angular/core';
import {AuthService} from 'src/app/service/auth/auth.service';
import {JwtService} from "../../../service/jwt/jwt.service";
import {Router} from "@angular/router";
import {NavbarUpdateListenerService} from "../../../service/navbar/navbar-update-listener.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string = '';
  username: string = '';
  error: string = '';

  constructor(private authService: AuthService, private jwtService: JwtService, private router: Router, private navbarService: NavbarUpdateListenerService, private titleService: Title) {
    this.titleService.setTitle('Login');
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        this.jwtService.saveToken(response.token);
        this.navbarService.triggerUpdateNavbar();
        this.router.navigate(['']);
      }, error => {
        this.error = "Username or password incorrect!!!"
      }
    )
  }

  closeError() {
    this.error = '';
  }
}
