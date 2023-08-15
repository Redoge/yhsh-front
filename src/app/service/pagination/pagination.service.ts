import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  public maxPage = 1;
  public minPage = 1;
  private activePageSubject = new BehaviorSubject<number>(1);
  public activePage$: Observable<number> = this.activePageSubject.asObservable();
  public size = 20;

  setActivePage(page: number): void {
    this.activePageSubject.next(page);
  }
}
