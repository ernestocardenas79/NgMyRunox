import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxMaskComponent } from './sandbox-mask.component';

describe('SandboxMaskComponent', () => {
  let component: SandboxMaskComponent;
  let fixture: ComponentFixture<SandboxMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
