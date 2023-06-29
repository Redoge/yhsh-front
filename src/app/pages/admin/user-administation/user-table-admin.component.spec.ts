import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableAdminComponent } from './user-table-admin.component';

describe('UserAdministationComponent', () => {
  let component: UserTableAdminComponent;
  let fixture: ComponentFixture<UserTableAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTableAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTableAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
