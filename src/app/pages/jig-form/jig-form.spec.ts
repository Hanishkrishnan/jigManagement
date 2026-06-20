import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JigForm } from './jig-form';

describe('JigForm', () => {
  let component: JigForm;
  let fixture: ComponentFixture<JigForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JigForm],
    }).compileComponents();

    fixture = TestBed.createComponent(JigForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
