import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { DmdModalOpenClickDirective } from './dmd-modal-open-click.directive';



@NgModule({
  declarations: [ModalComponent, DmdModalOpenClickDirective],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent, DmdModalOpenClickDirective]
})
export class DmdModalModule { }
