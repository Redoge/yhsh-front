import {Training} from "../entity/Training";

export interface GroupedTrainingsDto {
  date: Date;
  trainings: Training[];
}
