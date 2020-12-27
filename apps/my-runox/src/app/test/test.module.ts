import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from './sandbox/sandbox.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputFAModule} from '@diamoncode/dimond-code-ui-lib'



@NgModule({
  declarations: [SandboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    InputFAModule
  ],
  exports:[SandboxComponent]
})
export class TestModule { }
