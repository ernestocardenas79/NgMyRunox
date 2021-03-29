import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { RnxModalService } from './rnx-modal.service';

@Directive({
  selector: '[rnxModalOpenOnClick]'
})
export class ModalOpenOnClickDirective implements OnInit, OnDestroy {

  element: HTMLBaseElement;

  constructor(private templateRef: TemplateRef<any>,
            private viewContainer:ViewContainerRef,
            private modalService: RnxModalService) { }
  ngOnInit(): void {
    this.modalService.close$.subscribe(()=> this.viewContainer.clear());
  }

  ngOnDestroy(){
    this.element.removeEventListener('click', this.clickHandler.bind(this))
  }

  @Input()
  set rnxModalOpenOnClick(el: HTMLBaseElement){

    this.element = el;

    this.element.addEventListener('click',this.clickHandler.bind(this));
  }

  clickHandler(){
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
  }

//   clickHandler = (()=>{
//     this.viewContainer.clear();
//     this.viewContainer.createEmbeddedView(this.templateRef);
// }).bind(this)
}
