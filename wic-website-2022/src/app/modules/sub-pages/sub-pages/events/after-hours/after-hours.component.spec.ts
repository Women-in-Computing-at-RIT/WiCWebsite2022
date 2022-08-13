import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterHoursComponent } from './after-hours.component';

describe('AfterHoursComponent', () => {
  let component: AfterHoursComponent;
  let fixture: ComponentFixture<AfterHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterHoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
