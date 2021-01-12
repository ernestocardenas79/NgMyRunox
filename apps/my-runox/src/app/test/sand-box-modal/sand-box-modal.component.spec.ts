import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandBoxModalComponent } from './sand-box-modal.component';

describe('SandBoxModalComponent', () => {
  let component: SandBoxModalComponent;
  let fixture: ComponentFixture<SandBoxModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandBoxModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandBoxModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
