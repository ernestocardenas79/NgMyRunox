import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { RnxModalModule } from './rnx-modal/rnx-modal.module';
import { ModalComponent } from './rnx-modal/modal.component';
import { ModalOpenOnClickDirective } from './rnx-modal/modal-open-on-click.directive';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, RnxModalModule.forRoot(), FontAwesomeModule],
  exports: [PlayerComponent, ModalComponent, ModalOpenOnClickDirective, FaIconComponent],
})
export class SharedModule {}
