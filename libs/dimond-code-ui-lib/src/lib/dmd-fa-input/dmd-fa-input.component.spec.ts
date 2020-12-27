import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFAComponent } from './dmd-fa-input.component';

describe('DmdInputComponent', () => {
  let component: InputFAComponent;
  let fixture: ComponentFixture<InputFAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
