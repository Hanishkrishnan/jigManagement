import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestDialog } from './new-request-dialog';

describe('NewRequestDialog', () => {
  let component: NewRequestDialog;
  let fixture: ComponentFixture<NewRequestDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRequestDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(NewRequestDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
