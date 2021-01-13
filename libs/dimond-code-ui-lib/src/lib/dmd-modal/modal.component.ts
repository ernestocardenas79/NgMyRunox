import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'dmd-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input()
  body: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
