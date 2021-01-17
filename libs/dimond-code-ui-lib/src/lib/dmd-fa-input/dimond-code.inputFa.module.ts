import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFAComponent } from './dmd-fa-input.component';
import { InputRefDirective } from '../common/input-ref.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [InputFAComponent, InputRefDirective],
  exports:[InputFAComponent, InputRefDirective]
})
export class InputFAModule {}
