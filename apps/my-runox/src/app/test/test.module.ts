import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from './sandbox/sandbox.component';



@NgModule({
  declarations: [SandboxComponent],
  imports: [
    CommonModule
  ],
  exports:[SandboxComponent]
})
export class TestModule { }
