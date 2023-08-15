import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOMAIN_PATH} from "../../environments/environment";
import {map} from "rxjs";
import {Workout} from "../../dto/Workout";
import {WorkoutSaveDto} from "../../dto/WorkoutSaveDto";
import {Page} from "../../dto/Page";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private httpClient:HttpClient) { }

  getAllWorkouts() {
    return this.httpClient.get(DOMAIN_PATH + '/workouts').pipe(
      map((response: any) => {
        const workouts: Page<Workout> = response;
        return workouts;
      })
    );
  }

  saveWorkout(workout: WorkoutSaveDto){
    return this.httpClient.post(DOMAIN_PATH + '/workouts', workout).pipe(
      map((response: any) => {
        const workout: Workout = response;
        return workout;
      })
    );
  }

  getAllWorkoutsByUsername(username: string, page:number){
    return this.httpClient.get(DOMAIN_PATH+"/workouts?username="+username+'&page='+page).pipe(
    map((response: any) => {
      const allWorkouts: Page<Workout> = response;
      return allWorkouts;
    })
    )
  }

  getWorkoutById(id:number) {
    return this.httpClient.get(DOMAIN_PATH+"/workouts/"+id).pipe(
      map((response: any) => {
        const workout: Workout = response;
        return workout;
      })
    )
  }

  removeWorkoutById(id: number) {
    return this.httpClient.delete(DOMAIN_PATH+"/workouts/"+id).pipe(
      map((response: any) => {
        const success: boolean = response;
        return success;
      })
    )
  }
}
