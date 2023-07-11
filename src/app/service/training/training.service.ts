import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOMAIN_PATH} from "../../util/consts";
import {map} from "rxjs";
import {JwtService} from "../jwt/jwt.service";
import {Training} from "../../entity/Training";
import {ActivityService} from "../activity/activity.service";
import {Activity} from "../../entity/Activity";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private httpClient: HttpClient, private jwtService: JwtService, private activityService: ActivityService) { }

  saveTraining(activityId: number | undefined, count: number) {
    const start = new Date().toISOString();
    const username = this.jwtService.getUsername();
    return this.httpClient.post(DOMAIN_PATH + '/trainings', { activityId, count, start, username }).pipe( //TODO
      map((response: any) => {
        const training: Training = response;
        return training;
      })
    );
  }
  getTrainingsByUserUsername(username:string){
    return this.httpClient.get(DOMAIN_PATH + '/trainings?username='+username).pipe( //TODO
      map((response: any) => {
        const training: Training[] = response;
        return training;
      })
    );
  }
  public getTrainingsByActivityId(activityId: number) {
    return this.activityService.getActivityById(activityId).pipe(map((response: any) =>{
      const activity: Activity = response
      return activity.trainings
    }))
  }
  removeTrainingById(id:number) {
    return this.httpClient.delete(DOMAIN_PATH + '/trainings/'+id).pipe(
      map((response:any)=>{
        const isDeleted:boolean = response;
        return isDeleted;
      })
    );
  }
}
