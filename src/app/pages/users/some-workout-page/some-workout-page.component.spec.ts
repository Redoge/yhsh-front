import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeWorkoutPageComponent } from './some-workout-page.component';

describe('SomeWorkoutPageComponent', () => {
  let component: SomeWorkoutPageComponent;
  let fixture: ComponentFixture<SomeWorkoutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomeWorkoutPageComponent]
    });
    fixture = TestBed.createComponent(SomeWorkoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
