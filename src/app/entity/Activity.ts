import {User} from "./User";
import {Training} from "./Training";

export interface Activity{
   id: number;
   name: string;
   notation: string;
   creator: User;
   trainings: Training[];
   removed: boolean;

}
