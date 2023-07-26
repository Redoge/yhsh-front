import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtService} from "../jwt/jwt.service";
import {map} from "rxjs";
import {UserActivityStatsDto} from "../../dto/UserActivityStatsDto";
import {DOMAIN_PATH} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private httpClient: HttpClient, private jwtService:JwtService) { }

  getStatsByUsername(username: string) {
    return this.httpClient.get(DOMAIN_PATH + '/users/'+username+'/stats').pipe(
      map((response: any) => {
        const stats: UserActivityStatsDto[] = response
        return stats;
      })
    );
  }
}
