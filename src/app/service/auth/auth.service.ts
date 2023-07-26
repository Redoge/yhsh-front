import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOMAIN_PATH} from "../../environments/environment";
import {AuthenticationResponseDto} from "../../dto/AuthenticationResponseDto";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient:HttpClient) { }

  login(username: string, password: string): Observable<AuthenticationResponseDto> {
    return this.httpClient.post(DOMAIN_PATH + '/auth/login', { username, password }).pipe(
      map((response: any) => {
        const authResponse: AuthenticationResponseDto = {
          token: response.token
        };
        return authResponse;
      })
    );
  }

  register(username: string, email: string, password: string): Observable<AuthenticationResponseDto> {
    return this.httpClient.post(DOMAIN_PATH + '/auth/register', { username, email, password }).pipe(
      map((response: any) => {
        const authResponse: AuthenticationResponseDto = {
          token: response.token
        };
        return authResponse;
      })
    );
  }
}
