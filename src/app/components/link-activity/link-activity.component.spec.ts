import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkActivityComponent } from './link-activity.component';

describe('LinkActivityComponent', () => {
  let component: LinkActivityComponent;
  let fixture: ComponentFixture<LinkActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
