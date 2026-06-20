import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityForm } from './quality-form';

describe('QualityForm', () => {
  let component: QualityForm;
  let fixture: ComponentFixture<QualityForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityForm],
    }).compileComponents();

    fixture = TestBed.createComponent(QualityForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
