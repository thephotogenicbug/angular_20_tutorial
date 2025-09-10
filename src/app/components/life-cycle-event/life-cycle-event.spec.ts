import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleEvent } from './life-cycle-event';

describe('LifeCycleEvent', () => {
  let component: LifeCycleEvent;
  let fixture: ComponentFixture<LifeCycleEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
