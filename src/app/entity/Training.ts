import {Activity} from "./Activity";
import {User} from "./User";

export interface Training {
   id: number;
   activity: Activity;
   count: number;
   startTime: Date;
   user: User;
   removed: boolean;
   mode: string;
}
