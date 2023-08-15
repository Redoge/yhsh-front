import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationNavComponentComponent } from './pagination-nav-component.component';

describe('PaginationNavComponentComponent', () => {
  let component: PaginationNavComponentComponent;
  let fixture: ComponentFixture<PaginationNavComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationNavComponentComponent]
    });
    fixture = TestBed.createComponent(PaginationNavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
