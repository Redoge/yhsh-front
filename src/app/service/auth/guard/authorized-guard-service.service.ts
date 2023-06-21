import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {JwtService} from "../../jwt/jwt.service";
import {UserRole} from "../../../entity/UserRole";

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {
  constructor(private router: Router, private jwtService: JwtService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.jwtService.getUserRole() == UserRole.ADMIN) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {
  constructor(private router: Router, private jwtService: JwtService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.jwtService.getUserRole() == UserRole.USER) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
@Injectable({
  providedIn: 'root'
})
export class UnauthorizedGuardService implements CanActivate {
  constructor( private router: Router, private jwtService: JwtService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.jwtService.getUserRole() == UserRole.ANONYMOUS) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
