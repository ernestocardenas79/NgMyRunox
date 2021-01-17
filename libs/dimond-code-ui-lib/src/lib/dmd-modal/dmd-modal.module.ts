import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { DmdModalOpenClickDirective } from './dmd-modal-open-click.directive';
import { DmdModalServiceService } from './dmd-modal-service.service';

@NgModule({
  declarations: [ModalComponent, DmdModalOpenClickDirective],
  imports: [CommonModule],
  exports: [ModalComponent, DmdModalOpenClickDirective],
})
export class DmdModalModule {
  static forRoot(): ModuleWithProviders<DmdModalModule> {
    return {
      ngModule: DmdModalModule,
      providers: [DmdModalServiceService],
    };
  }
}
