import { SandboxComponent } from './sandbox/sandbox.component';
import { SandboxComponentEj2 } from './sandboxEj2/sandboxEj2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabPanelModule, InputFAModule} from '@diamoncode/dimond-code-ui-lib'

@NgModule({
  declarations: [SandboxComponent, SandboxComponentEj2],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    InputFAModule,
    TabPanelModule
  ],
  exports:[SandboxComponent, SandboxComponentEj2]
})
export class TestModule { }

