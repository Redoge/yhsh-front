import {Activity} from "./Activity";
import {Time} from "@angular/common";
import {User} from "./User";

export class Training {
  private _id: number;
  private _activity: Activity;
  private _count: number;
  private _startTime: Time;
  private _endTime: Time;
  private _user: User;
  private _removed: boolean;

  constructor(id: number, activity: Activity, count: number, startTime: Time, endTime: Time, user: User, removed: boolean) {
    this._id = id;
    this._activity = activity;
    this._count = count;
    this._startTime = startTime;
    this._endTime = endTime;
    this._user = user;
    this._removed = removed;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get activity(): Activity {
    return this._activity;
  }

  set activity(value: Activity) {
    this._activity = value;
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }

  get startTime(): Time {
    return this._startTime;
  }

  set startTime(value: Time) {
    this._startTime = value;
  }

  get endTime(): Time {
    return this._endTime;
  }

  set endTime(value: Time) {
    this._endTime = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get removed(): boolean {
    return this._removed;
  }

  set removed(value: boolean) {
    this._removed = value;
  }
}
