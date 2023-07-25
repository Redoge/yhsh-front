import {TrainingIntoWorkoutSaveDto} from "./TrainingIntoWorkoutSaveDto";

export interface WorkoutSaveDto{
  trainings: TrainingIntoWorkoutSaveDto[];
  username: string;
  name: string;
  startTime: Date;
  endTime: Date;
}
