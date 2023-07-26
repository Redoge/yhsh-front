import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOMAIN_PATH} from "../../util/consts";
import {map} from "rxjs";
import {JwtService} from "../jwt/jwt.service";
import {UserDto} from "../../dto/UserDto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient, private jwtService: JwtService) { }
  getLoggedUser() {
    let username = this.jwtService.getUsername();
    return this.httpClient.get(DOMAIN_PATH + '/users/'+username).pipe(
      map((response: any) => {
        const user: UserDto = response
        return user;
      })
    );
  }

  updateUser(username: string, heightSm: number, weightKg: number, sex: string) {
    return this.httpClient.post(DOMAIN_PATH + '/users', { username,heightSm, weightKg, sex }).pipe(
      map((response: any) => {
        const user: UserDto = response;
        return user;
      })
    );
  }

  getAll() {
    return this.httpClient.get(DOMAIN_PATH + '/users').pipe(
      map((response: any) => {
        const users: UserDto[] = response;
        return users;
      })
    );
  }
  changeRoleById(id: number) {
    return this.httpClient.post(DOMAIN_PATH + '/admin/users/change/role', {id}).pipe(
      map((response: any) => {
        const changed: boolean = response;
        return changed;
      })
    );
  }
  changeActiveById(id: number) {
    return this.httpClient.post(DOMAIN_PATH + '/admin/users/change/enabled',{id}).pipe(
      map((response: any) => {
        const changed: boolean = response;
        return changed;
      })
    );
  }

  getUserByUsername(username: string) {
    return this.httpClient.get(DOMAIN_PATH + '/users/'+username).pipe(
      map((response: any) => {
        const user: UserDto = response;
        return user;
      })
    );
  }
  calculateBmi(h: number, w: number) {
    return (w / Math.pow((h/100), 2))
  }
}
