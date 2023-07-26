import { Injectable } from '@angular/core';
import {TrainingDto} from "../../../../dto/TrainingDto";
import {GroupedTrainingsDto} from "../../../../dto/GroupedTrainingsDto";

@Injectable({
  providedIn: 'root'
})
export class TrainingGrouperService {

  constructor() { }

  public groupByDate(trainings :TrainingDto[]){
    const groupedTrainings: GroupedTrainingsDto[] = [];
    trainings.forEach(training => {
      const existingGroup = groupedTrainings.find(group =>
        new Date(group.date).toDateString() === new Date(training.startTime).toDateString());
      if (existingGroup) {
        existingGroup.trainings.push(training);
      } else {
        groupedTrainings.push({ date: training.startTime, trainings: [training] });
      }
    });
    return groupedTrainings;
  }

}
