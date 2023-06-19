import {UserRole} from "./UserRole";
import {Activity} from "./Activity";

export class User{
  private _id: number;
  private _username: string;
  private _email: string;
  private _sex: string;
  private _weightKg: number;
  private _heightSm: number;
  private _activities: Activity[];
  private _userRole: UserRole;

  constructor(id: number, username: string, email: string, sex: string, weightKg: number, heightSm: number, activities: Activity[], userRole: UserRole) {
    this._id = id;
    this._username = username;
    this._email = email;
    this._sex = sex;
    this._weightKg = weightKg;
    this._heightSm = heightSm;
    this._activities = activities;
    this._userRole = userRole;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get sex(): string {
    return this._sex;
  }

  set sex(value: string) {
    this._sex = value;
  }

  get weightKg(): number {
    return this._weightKg;
  }

  set weightKg(value: number) {
    this._weightKg = value;
  }

  get heightSm(): number {
    return this._heightSm;
  }

  set heightSm(value: number) {
    this._heightSm = value;
  }

  get activities(): Activity[] {
    return this._activities;
  }

  set activities(value: Activity[]) {
    this._activities = value;
  }

  get userRole(): UserRole {
    return this._userRole;
  }

  set userRole(value: UserRole) {
    this._userRole = value;
  }
}
