import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageAdminComponent } from './user-page-admin.component';

describe('UserPageAdminComponent', () => {
  let component: UserPageAdminComponent;
  let fixture: ComponentFixture<UserPageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
