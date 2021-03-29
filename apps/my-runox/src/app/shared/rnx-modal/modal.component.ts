import { Component, Input, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { RnxModalService } from './rnx-modal.service';

@Component({
  selector: 'rnx-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  hideOnEsc = true;

  @Input()
  hideOnClickOutside = true;

  constructor(private modalService: RnxModalService, private eventManager: EventManager) { }

  ngOnInit(): void {
    this.eventManager.addGlobalEventListener('window','keyup.esc',()=>
    {
      if(this.hideOnEsc){
        this.close()
      }
    }
    );
  }

  close(){
    this.modalService.close();
  }

  cancelClick(e: KeyboardEvent){
    e.preventDefault();
    e.stopPropagation();
  }

  clickOutsideModal(){
    if(this.hideOnClickOutside){
      this.close();
    }
  }
}
