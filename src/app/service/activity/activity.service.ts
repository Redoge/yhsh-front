import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOMAIN_PATH} from "../../util/consts";
import {map} from "rxjs";
import {ActivityDto} from "../../dto/ActivityDto";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getActivitiesByUserUsername(username: string) {
    return this.httpClient.get(DOMAIN_PATH + '/activities?username=' + username).pipe(
      map((response: any) => {
        const activities: ActivityDto[] = response
        return activities;
      })
    );
  }
  createActivity(name: string, notation: string, username: string) {
    return this.httpClient.post(DOMAIN_PATH + '/activities', { name, notation, username }).pipe(
      map((response: any) => {
        const activity: ActivityDto = response
        return activity;
      })
    );
  }

  getActivityById(id: number) {
    return this.httpClient.get(DOMAIN_PATH + '/activities/'+id).pipe(
      map((response: any) => {
        const activity: ActivityDto = response
        return activity;
      })
    );
  }

  removeActivityById(id: number) {
    return this.httpClient.delete(DOMAIN_PATH + '/activities/'+id).pipe(
      map((response:any)=>{
        const isDeleted:boolean = response;
        return isDeleted;
      })
    );
  }
}
