import {TrainingDto} from "./TrainingDto";

export interface GroupedTrainingsDto {
  date: Date;
  trainings: TrainingDto[];
}
