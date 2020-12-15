import { Component, OnInit } from '@angular/core';
import {Room} from '@myrunoxModel';

@Component({
  selector: 'dmn-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  room:Room;
  constructor() { }

  ngOnInit(): void {
    this.room= <Room>{name:''};
    this.room.name='Uno';
    console.log(this.room);
  }

}
