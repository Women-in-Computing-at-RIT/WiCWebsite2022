import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeGridComponent } from './committee-grid.component';

describe('CommitteeGridComponent', () => {
  let component: CommitteeGridComponent;
  let fixture: ComponentFixture<CommitteeGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteeGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitteeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
