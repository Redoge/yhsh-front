import {UserDto} from "./UserDto";

export interface ActivityDto {
   id: number;
   name: string;
   notation: string;
   creator: UserDto;
   removed: boolean;
}
