import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nBlockComponent } from './i18n-block.component';

describe('I18nBlockComponent', () => {
  let component: I18nBlockComponent;
  let fixture: ComponentFixture<I18nBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I18nBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I18nBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
