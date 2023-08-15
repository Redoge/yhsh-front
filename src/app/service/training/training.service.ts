import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOMAIN_PATH} from "../../environments/environment";
import {map} from "rxjs";
import {JwtService} from "../jwt/jwt.service";
import {TrainingDto} from "../../dto/TrainingDto";
import {Page} from "../../dto/Page";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private httpClient: HttpClient, private jwtService: JwtService) { }

  saveTraining(activityId: number | undefined, count: number) {
    const start = new Date().toISOString();
    const username = this.jwtService.getUsername();
    return this.httpClient.post(DOMAIN_PATH + '/trainings', { activityId, count, start, username }).pipe( //TODO
      map((response: any) => {
        const training: TrainingDto = response;
        return training;
      })
    );
  }
  getTrainingsByUserUsername(username:string, page:number) {
    return this.httpClient.get(DOMAIN_PATH + '/trainings?username='+username + '&page='+page).pipe( //TODO
      map((response: any) => {
        const training: Page<TrainingDto> = response;
        return training;
      })
    );
  }
  public getTrainingsByActivityId(activityId: number, page: number) {
    return this.httpClient.get(DOMAIN_PATH + '/trainings?activityId='+activityId + '&page='+page).pipe(
      map((response: any) => {
        const training: Page<TrainingDto> = response;
        return training;
      })
    );
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
