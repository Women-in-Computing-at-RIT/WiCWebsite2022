import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualEventsComponent } from './annual-events.component';

describe('AnnualEventsComponent', () => {
  let component: AnnualEventsComponent;
  let fixture: ComponentFixture<AnnualEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
