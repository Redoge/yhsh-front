import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailActivateComponent } from './email-activate.component';

describe('EmailActivateModalComponent', () => {
  let component: EmailActivateComponent;
  let fixture: ComponentFixture<EmailActivateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailActivateComponent]
    });
    fixture = TestBed.createComponent(EmailActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
