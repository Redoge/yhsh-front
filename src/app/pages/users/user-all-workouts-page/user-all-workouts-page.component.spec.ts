import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllWorkoutsPageComponent } from './user-all-workouts-page.component';

describe('UserAllWorkoutsPageComponent', () => {
  let component: UserAllWorkoutsPageComponent;
  let fixture: ComponentFixture<UserAllWorkoutsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAllWorkoutsPageComponent]
    });
    fixture = TestBed.createComponent(UserAllWorkoutsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
