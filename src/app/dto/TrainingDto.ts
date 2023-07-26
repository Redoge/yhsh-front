import {ActivityDto} from "./ActivityDto";
export interface TrainingDto {
   id: number;
   activity: ActivityDto;
   count: number;
   startTime: Date;
   userId: number;
   removed: boolean;
   mode: string;
}
