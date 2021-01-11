import { SandboxComponent } from './sandbox.component';
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import {InputFAModule} from '@diamoncode/dimond-code-ui-lib';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('SandboxComponent', ()=>{
   let component = SandboxComponent,
    fixture: ComponentFixture<SandboxComponent>,
    el: DebugElement,
    emailField: DebugElement;


  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[InputFAModule],
      declarations: [ SandboxComponent ]
    }).compileComponents();
  });

  beforeEach(()=>{
     fixture = TestBed.createComponent(SandboxComponent);
     component = fixture.debugElement.componentInstance;
     el = fixture.debugElement;
     emailField =  el.query(By.css('#email-field'));

     fixture.detectChanges();
  })

  it('Should Create an app', ()=>{
    expect(component).toBeTruthy();
  })

  it('should create a font awesome input', ()=>{
    expect(emailField).toBeTruthy();
  })

  it('should include the correct email icon inside the email input', waitForAsync(()=>{
    console.log('debud ',emailField.nativeElement.outerHTML);
    expect(emailField.query(By.css('i.fa.fa-envelope'))).toBeTruthy();
  }))

  it('should have projected the correct test input inside the email field', waitForAsync(()=>{
    expect(emailField.query(By.css('input.test-class'))).toBeTruthy()
  }))

})
