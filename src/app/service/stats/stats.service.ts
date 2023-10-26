import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {UserActivityStatsDto} from "../../dto/UserActivityStatsDto";
import {DOMAIN_PATH} from "../../environments/environment";
import {Page} from "../../dto/Page";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private httpClient: HttpClient) { }

  getStatsByUsername(username: string) {
    return this.httpClient.get(DOMAIN_PATH + '/users/'+username+'/stats').pipe(
      map((response: any) => {
        const stats: Page<UserActivityStatsDto> = response
        return stats;
      })
    );
  }

  getStatsByUsernameAndFilter(username: string, start: Date | undefined | string, end: Date | undefined | string) {
    if(start===undefined)
      start = this.getCurrentDateInFormat(new Date(2023, 0, 1, 0, 0, 0, 0))
    if(end===undefined)
      end = this.getCurrentDateInFormat(new Date());
    console.log(start, end)
    return this.httpClient.get(DOMAIN_PATH + '/users/'+username+'/stats?start='+start+'&end='+end).pipe(
      map((response: any) => {
        const stats: Page<UserActivityStatsDto> = response
        return stats;
      })
    );
  }

  private getCurrentDateInFormat(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
