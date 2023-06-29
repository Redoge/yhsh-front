import {Activity} from "./Activity";
export interface User{
  id: number,
  username: string,
  email: string,
  sex: string,
  weightKg: number,
  heightSm: number,
  activities: Activity[],
  userRole: string,
  enabled: boolean,
}
