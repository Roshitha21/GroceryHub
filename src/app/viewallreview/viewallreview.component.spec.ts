import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallreviewComponent } from './viewallreview.component';

describe('ViewallreviewComponent', () => {
  let component: ViewallreviewComponent;
  let fixture: ComponentFixture<ViewallreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
