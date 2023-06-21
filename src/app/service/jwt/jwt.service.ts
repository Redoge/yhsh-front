import {Injectable} from '@angular/core';
import jwt_decode from 'jwt-decode';
import {UserRole} from "../../entity/UserRole";

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private _token;
  constructor() {
    this._token = localStorage.getItem("token");
  }

  saveToken(token: string) {
    localStorage.setItem("token", token)
    this._token = token;
  }

  removeToken() {
    localStorage.removeItem("token");
    this._token = null;
  }

  getToken() {
    let exp = this.checkTokenExpiration(this._token);
    if (!exp) {
      this.removeToken()
    }
    return localStorage.getItem("token");
  }

  getUserRole(): UserRole {
    let tokenJwt = this.getToken();
    let token = this.getDecodeToken(tokenJwt ? tokenJwt : '');
    if (token != null) {
      // @ts-ignore
      let userRoleName = token.userRole;
      return userRoleName == "USER" ? UserRole.USER
        : userRoleName == "ADMIN"  ? UserRole.ADMIN  : UserRole.ANONYMOUS;
    }
    return UserRole.ANONYMOUS;
  }

  private getDecodeToken(token: string): string | null {
    if (token) {
      return jwt_decode(token);
    } else return null;
  }

  private checkTokenExpiration(tokenJwt: string | null): boolean {
    // Return true if token valid
    let token = this.getDecodeToken(tokenJwt ? tokenJwt : '');
    if (token != null) {
      // @ts-ignore
      let expires = token.exp;
      return new Date().getTime() - expires * 1000 < 0;
    }
    return false;
  }
}
