import {Time} from "@angular/common";
import {User} from "./User";

export class Login{
  private _id: number;
  private _user: User;
  private _loginTime: Time;

  constructor(id: number, user: User, loginTime: Time) {
    this._id = id;
    this._user = user;
    this._loginTime = loginTime;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get loginTime(): Time {
    return this._loginTime;
  }

  set loginTime(value: Time) {
    this._loginTime = value;
  }
}
