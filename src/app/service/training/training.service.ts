import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOMAIN_PATH} from "../../util/consts";
import {map} from "rxjs";
import {AuthenticationResponseDto} from "../../dto/AuthenticationResponseDto";
import {JwtService} from "../jwt/jwt.service";
import {Training} from "../../entity/Training";
import {Activity} from "../../entity/Activity";
import {User} from "../../entity/User";

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
        const training: Training = response;
        return training;
      })
    );
  }
  getTrainings(){
    const username = this.jwtService.getUsername();
    return this.httpClient.get(DOMAIN_PATH + '/trainings?username='+username).pipe( //TODO
      map((response: any) => {
        const training: Training[] = response;
        return training;
      })
    );
  }
  public getTrainingsByActivityId(activityId: number):Training[]{
    let trainings: Training[] = [];
    this.getTrainings().subscribe(res =>{
       trainings = res;
    })
    return trainings.filter(training => training.activity.id === activityId);
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
