import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtService} from "../jwt/jwt.service";
import {map} from "rxjs";
import {UserActivityStatsDto} from "../../dto/UserActivityStatsDto";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private httpClient: HttpClient, private jwtService:JwtService) { }

  getStats() {
    let username:string = this.jwtService.getUsername();
    return this.httpClient.get('/user/'+username+'stats').pipe(
      map((response: any) => {
        const stats: UserActivityStatsDto[] = response.map((data: any)=>{
          const stat: UserActivityStatsDto = {
            name: data.name,
            sum: data.sum,
            min: data.min,
            max: data.max,
            avg: data.avg,
            trainingsCount: data.trainingsCount,
            notation: data.notation
          };
          return stat;
        })
        return stats;
      })
    );
  }
}
