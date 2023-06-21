import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavbarUpdateListenerService {

  private updateNavbarSubject = new Subject<void>();

  updateNavbar$ = this.updateNavbarSubject.asObservable();

  triggerUpdateNavbar() {
    this.updateNavbarSubject.next();
  }
}
