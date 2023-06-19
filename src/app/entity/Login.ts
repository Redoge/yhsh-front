import {User} from "./User";

export class Login{
  private _id: number;
  private _user: User;
  private _loginTime: Date;

  constructor(id: number, user: User, loginTime: Date) {
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

  get loginTime(): Date {
    return this._loginTime;
  }

  set loginTime(value: Date) {
    this._loginTime = value;
  }
}
