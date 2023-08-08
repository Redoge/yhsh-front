import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationEmailComponentComponent } from './activation-email-component.component';

describe('ActivationEmailComponentComponent', () => {
  let component: ActivationEmailComponentComponent;
  let fixture: ComponentFixture<ActivationEmailComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivationEmailComponentComponent]
    });
    fixture = TestBed.createComponent(ActivationEmailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
