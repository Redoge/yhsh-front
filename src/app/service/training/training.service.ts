import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOMAIN_PATH} from "../../environments/environment";
import {map} from "rxjs";
import {JwtService} from "../jwt/jwt.service";
import {TrainingDto} from "../../dto/TrainingDto";

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
  getTrainingsByUserUsername(username:string){
    return this.httpClient.get(DOMAIN_PATH + '/trainings?username='+username).pipe( //TODO
      map((response: any) => {
        const training: TrainingDto[] = response;
        return training;
      })
    );
  }
  public getTrainingsByActivityId(activityId: number) {
    return this.httpClient.get(DOMAIN_PATH + '/trainings?activityId='+activityId).pipe(
      map((response: any) => {
        const training: TrainingDto[] = response;
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
