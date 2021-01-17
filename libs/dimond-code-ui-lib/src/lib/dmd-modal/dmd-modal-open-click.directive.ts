import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { DmdModalServiceService } from './dmd-modal-service.service';

@Directive({
  selector: '[dmdModalOpenClick]',
})
export class DmdModalOpenClickDirective implements OnInit, OnDestroy {
  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private modalService: DmdModalServiceService
  ) {}
  elements: HTMLElement[];
  ngOnInit() {
    this.modalService.close$.subscribe(() => this.viewContainer.clear());
  }

  ngOnDestroy() {
    this.elements.forEach((el) =>
      el.removeEventListener('click', this.clickHandler)
    );
  }

  @Input()
  set dmdModalOpenClick(els) {
    if (els.length) this.elements = els;
    else this.elements = [els];

    this.elements.forEach((el) => {
      el.addEventListener('click', this.clickHandler);
    });
  }

  clickHandler = (() => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.template);
  }).bind(this);
}
