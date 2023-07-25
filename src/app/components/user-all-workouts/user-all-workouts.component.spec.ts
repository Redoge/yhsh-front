import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllWorkoutsComponent } from './user-all-workouts.component';

describe('UserAllWorkoutsComponent', () => {
  let component: UserAllWorkoutsComponent;
  let fixture: ComponentFixture<UserAllWorkoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAllWorkoutsComponent]
    });
    fixture = TestBed.createComponent(UserAllWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
