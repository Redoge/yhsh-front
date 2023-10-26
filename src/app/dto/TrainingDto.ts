import {ActivityDto} from "./ActivityDto";
export interface TrainingDto {
   id: number;
   activity: ActivityDto;
   count: number;
   startTime: Date;
   removed: boolean;
   mode: string;
   weight: number
}
