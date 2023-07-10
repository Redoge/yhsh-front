import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {JwtService} from "../../service/jwt/jwt.service";
import {UserRole} from "../../entity/UserRole";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private jwtService: JwtService) {
  }

  ngOnInit(): void {
    const role = this.jwtService.getUserRole();
    if (role === UserRole.USER || role === UserRole.ADMIN) {
      this.router.navigate(['/user']);
    } else{
      this.router.navigate(['/login']);
    }
  }
}
