import { SandboxComponent } from './sandbox/sandbox.component';
import { SandboxComponentEj2 } from './sandboxEj2/sandboxEj2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  TabPanelModule,
  InputFAModule,
  DmdModalModule,
} from '@diamoncode/dimond-code-ui-lib';
import { SandBoxModalComponent } from './sand-box-modal/sand-box-modal.component';

@NgModule({
  declarations: [SandboxComponent, SandboxComponentEj2, SandBoxModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    InputFAModule,
    TabPanelModule,
    DmdModalModule.forRoot(),
  ],
  exports: [SandboxComponent, SandboxComponentEj2, SandBoxModalComponent],
})
export class TestModule {}
