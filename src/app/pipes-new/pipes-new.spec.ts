import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesNew } from './pipes-new';

describe('PipesNew', () => {
  let component: PipesNew;
  let fixture: ComponentFixture<PipesNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
