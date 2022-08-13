import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WichacksComponent } from './wichacks.component';

describe('WichacksComponent', () => {
  let component: WichacksComponent;
  let fixture: ComponentFixture<WichacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WichacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WichacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
