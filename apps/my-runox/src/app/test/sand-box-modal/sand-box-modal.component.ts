import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rnx-sand-box-modal',
  templateUrl: './sand-box-modal.component.html',
  styleUrls: ['./sand-box-modal.component.scss'],
})
export class SandBoxModalComponent implements OnInit {
  loginActive = true;

  constructor() {}

  ngOnInit(): void {}

  openLoginMode() {
    this.loginActive = true;
  }

  openSignUpMode() {
    this.loginActive = false;
  }
}
