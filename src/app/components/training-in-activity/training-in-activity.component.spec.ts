import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingInActivityComponent } from './training-in-activity.component';

describe('TrainingInActivityComponent', () => {
  let component: TrainingInActivityComponent;
  let fixture: ComponentFixture<TrainingInActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingInActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingInActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
