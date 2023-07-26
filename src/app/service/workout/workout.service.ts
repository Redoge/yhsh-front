import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOMAIN_PATH} from "../../util/consts";
import {map} from "rxjs";
import {Workout} from "../../dto/Workout";
import {WorkoutSaveDto} from "../../dto/WorkoutSaveDto";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private httpClient:HttpClient) { }

  getAllWorkouts() {
    return this.httpClient.get(DOMAIN_PATH + '/workouts').pipe(
      map((response: any) => {
        const workouts: Workout[] = response;
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

  getAllWorkoutsByUsername(username: string){
    return this.httpClient.get(DOMAIN_PATH+"/workouts?username="+username).pipe(
    map((response: any) => {
      const allWorkouts: Workout[] = response;
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
