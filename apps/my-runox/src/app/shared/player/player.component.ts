import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rnx-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  constructor() {}

  @Input()
  player;
}
