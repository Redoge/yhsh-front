import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTrainingTableComponent } from './activity-training-table.component';

describe('ActivityTrainingTableComponent', () => {
  let component: ActivityTrainingTableComponent;
  let fixture: ComponentFixture<ActivityTrainingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityTrainingTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityTrainingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
