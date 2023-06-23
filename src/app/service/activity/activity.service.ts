import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOMAIN_PATH} from "../../util/consts";
import {map} from "rxjs";
import {JwtService} from "../jwt/jwt.service";
import {Activity} from "../../entity/Activity";
import {AuthenticationResponseDto} from "../../dto/AuthenticationResponseDto";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient, private jwtService: JwtService) { }

  getActivities() {
    let username = this.jwtService.getUsername();
    return this.httpClient.get(DOMAIN_PATH + '/activities?username=' + username).pipe(
      map((response: any) => {
        const activities: Activity[] = response.map((activityData: any) => {
          const activity: Activity = {
            id: activityData.id,
            name: activityData.name,
            notation: activityData.notation,
            creator: activityData.creator,
            trainings: activityData.trainings,
            removed: activityData.removed
          };
          return activity;
        });
        return activities;
      })
    );
  }

  createActivity(name: string, notation: string, username: string) {
    return this.httpClient.post(DOMAIN_PATH + '/activities', { name, notation, username }).pipe(
      map((response: any) => {
        const activity: Activity = {
          id: response.id,
          name: response.name,
          notation: response.notation,
          creator: response.creator,
          trainings: response.trainings,
          removed: response.removed
        };
        return activity;
      })
    );
  }

  getActivityById(id: number) {
    return this.httpClient.get(DOMAIN_PATH + '/activities/'+id).pipe(
      map((response: any) => {
        const activity: Activity = {
          id: response.id,
          name: response.name,
          notation: response.notation,
          creator: response.creator,
          trainings: response.trainings,
          removed: response.removed
        };
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
