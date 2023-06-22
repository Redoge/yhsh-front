import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeActivityComponent } from './some-activity.component';

describe('SomeActivityComponent', () => {
  let component: SomeActivityComponent;
  let fixture: ComponentFixture<SomeActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
