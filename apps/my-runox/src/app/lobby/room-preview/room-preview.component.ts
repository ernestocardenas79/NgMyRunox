import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dmn-room-preview',
  templateUrl: './room-preview.component.html',
  styleUrls: ['./room-preview.component.css'],
})
export class RoomPreviewComponent {
  limit;
  playersLimit;
  players;
  roomName;
  host;

  @Input()
  set roomInformation(i) {
    const { scoreLimit, playersLimit, name: roomName, host } = i;

    this.host = host;
    this.roomName = roomName;
    this.limit = scoreLimit;
    this.playersLimit = playersLimit;

    this.players = [...i.players];
  }
}
