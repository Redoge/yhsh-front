import {TrainingDto} from "./TrainingDto";

export interface Workout{
  id:number;
  trainings: TrainingDto[];
  userId: number;
  name: string;
  startTime: Date;
  endTime: Date;
  removed: boolean;
}
