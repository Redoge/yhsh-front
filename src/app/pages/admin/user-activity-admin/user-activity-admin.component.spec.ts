import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivityAdminComponent } from './user-activity-admin.component';

describe('UserActivityAdminComponent', () => {
  let component: UserActivityAdminComponent;
  let fixture: ComponentFixture<UserActivityAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserActivityAdminComponent]
    });
    fixture = TestBed.createComponent(UserActivityAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
