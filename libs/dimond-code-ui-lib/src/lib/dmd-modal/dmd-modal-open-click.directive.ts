import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dmdModalOpenClick]',
})
export class DmdModalOpenClickDirective {
  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set dmdModalOpenClick(els) {
    let elements: HTMLElement[];

    if (els.length) elements = els;
    else elements = [els];

    elements.forEach((el) => {
      el.addEventListener('click', () => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.template);
      });
    });
  }
}
