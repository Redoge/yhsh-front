import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatsAdminComponent } from './user-stats-admin.component';

describe('UserStatsAdminComponent', () => {
  let component: UserStatsAdminComponent;
  let fixture: ComponentFixture<UserStatsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserStatsAdminComponent]
    });
    fixture = TestBed.createComponent(UserStatsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
