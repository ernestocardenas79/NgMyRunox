import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { DmdModalServiceService } from './dmd-modal-service.service';

@Component({
  selector: 'dmd-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input()
  body: TemplateRef<any>;

  @Input()
  hideOnClickOutside = true;

  @Input()
  hideOnEsc = true;

  @Input()
  context: any;

  constructor(
    private modalService: DmdModalServiceService,
    private eventManager: EventManager
  ) {}

  ngOnInit(): void {
    this.eventManager.addGlobalEventListener('window', 'keyup.esc', () => {
      if (this.hideOnEsc) {
        console.log(this.hideOnEsc);
        this.close();
      }
    });
  }

  ngOnDestroy() {}

  closeModalOnClickOutside() {
    if (this.hideOnClickOutside) {
      this.close();
    }
  }

  close() {
    this.modalService.close();
  }

  cancelClick(evt: KeyboardEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }
}
