import {User} from "./User";
import {Training} from "./Training";

export class Activity{
  private _id: number;
  private _name: string;
  private _notation: string;
  private _creator: User;
  private _trainings: Training[];
  private _removed: boolean;

  constructor(id: number, name: string, notation: string, creator: User, trainings: Training[], removed: boolean) {
    this._id = id;
    this._name = name;
    this._notation = notation;
    this._creator = creator;
    this._trainings = trainings;
    this._removed = removed;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get notation(): string {
    return this._notation;
  }

  set notation(value: string) {
    this._notation = value;
  }

  get creator(): User {
    return this._creator;
  }

  set creator(value: User) {
    this._creator = value;
  }

  get trainings(): Training[] {
    return this._trainings;
  }

  set trainings(value: Training[]) {
    this._trainings = value;
  }

  get removed(): boolean {
    return this._removed;
  }

  set removed(value: boolean) {
    this._removed = value;
  }
}
