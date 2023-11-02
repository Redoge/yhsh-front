import {UserWeight} from "./UserWeight";


export interface UserDto {
  id: number,
  username: string,
  email: string,
  sex: string,
  weightKg: UserWeight[],
  heightSm: number,
  userRole: string,
  enabled: boolean,
  emailConfirmed: boolean
}
