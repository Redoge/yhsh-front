import { Injectable } from '@angular/core';
import {DOMAIN_PATH} from "../../environments/environment";
import {map} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmailActivateService {

  constructor(private httpClient: HttpClient) { }

  activateEmail(code: string) {
    return this.httpClient.get(DOMAIN_PATH + '/activate?token='+code).pipe(
      map((response: any) => {
        const responseStr: string = response;
        return responseStr;
      })
    );
  }

  resendCode(email: string){
    return this.httpClient.get(DOMAIN_PATH + '/activate/resend?email='+email).pipe(
      map((response: any) => {
        const responseStr: string = response;
        return responseStr;
      })
    );
  }
}
