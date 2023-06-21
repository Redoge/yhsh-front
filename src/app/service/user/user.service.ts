import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOMAIN_PATH} from "../../util/consts";
import {map} from "rxjs";
import {JwtService} from "../jwt/jwt.service";
import {User} from "../../entity/User";
import {AuthenticationResponseDto} from "../../dto/AuthenticationResponseDto";
import {UserUpdateRequestDto} from "../../dto/UserUpdateRequestDto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient, private jwtService: JwtService) { }
  getUser() {
    let username = this.jwtService.getUsername();
    return this.httpClient.get(DOMAIN_PATH + '/users/'+username).pipe(
      map((response: any) => {
        const user: User = {
          id: response.id,
          username: response.username,
          email: response.email,
          sex: response.sex,
          weightKg: response.weightKg,
          heightSm: response.heightSm,
          activities: response.activities,
          userRole: response.userRole,
        };
        return user;
      })
    );
  }

  updateUser(username: string, heightSm: number, weightKg: number, sex: string) {
    return this.httpClient.post(DOMAIN_PATH + '/users', { username,heightSm, weightKg, sex }).pipe(
      map((response: any) => {
        const user: User = {
          id: response.id,
          username: response.username,
          email: response.email,
          sex: response.sex,
          weightKg: response.weightKg,
          heightSm: response.heightSm,
          activities: response.activities,
          userRole: response.userRole,
        };
        return user;
      })
    );
  }
}
