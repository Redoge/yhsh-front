import {ActivityTypeDto} from "./ActivityTypeDto";

export interface ActivityDto {
   id: number;
   name: string;
   type: ActivityTypeDto;
   creatorId: number;
   removed: boolean;
   withWeight: boolean
}
