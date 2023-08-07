import {UserDto} from "./UserDto";
export interface FriendshipDto{
  id: number,
  sender: UserDto,
  receiver: UserDto,
  createdAt: Date
}
