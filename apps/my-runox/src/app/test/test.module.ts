import { BrowserModule } from '@angular/platform-browser';
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
  DmdInputMaskModule,
} from '@diamoncode/dimond-code-ui-lib';
import { SandBoxModalComponent } from './sand-box-modal/sand-box-modal.component';
import { SandboxMaskComponent } from './sandbox-mask/sandbox-mask.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SandboxComponent,
    SandboxComponentEj2,
    SandBoxModalComponent,
    SandboxMaskComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    InputFAModule,
    TabPanelModule,
    DmdModalModule.forRoot(),
    DmdInputMaskModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    SandboxComponent,
    SandboxComponentEj2,
    SandBoxModalComponent,
    SandboxMaskComponent,
  ],
})
export class TestModule {}
