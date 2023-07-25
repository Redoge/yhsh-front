import {User} from "./User";
import {Training} from "./Training";

export interface Workout{
  id:number;
  trainings: Training[];
  user: User;
  name: string;
  startTime: Date;
  endTime: Date;
  removed: boolean;
}
