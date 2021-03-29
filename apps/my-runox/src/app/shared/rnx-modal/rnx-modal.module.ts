import { NgModule, ModuleWithProviders } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalOpenOnClickDirective } from './modal-open-on-click.directive';
import { RnxModalService } from './rnx-modal.service';




@NgModule({
  declarations: [ModalComponent, ModalOpenOnClickDirective],
  imports: [
  ],
  exports: [ModalComponent, ModalOpenOnClickDirective]
})
export class RnxModalModule {


  static forRoot(): ModuleWithProviders<RnxModalModule>{
      return{
        ngModule: RnxModalModule,
        providers:[RnxModalService]
      }
  }

}
