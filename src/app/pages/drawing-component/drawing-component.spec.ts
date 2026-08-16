import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingComponent } from './drawing-component';

describe('DrawingComponent', () => {
  let component: DrawingComponent;
  let fixture: ComponentFixture<DrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrawingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
