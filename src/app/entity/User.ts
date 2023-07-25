import {Activity} from "./Activity";
import {Workout} from "./Workout";
export interface User{
  id: number,
  username: string,
  email: string,
  sex: string,
  weightKg: number,
  heightSm: number,
  activities: Activity[],
  workouts: Workout[],
  userRole: string,
  enabled: boolean,
  emailConfirmed: boolean
}
