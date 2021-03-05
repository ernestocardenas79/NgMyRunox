import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Room } from '@myrunoxModel';
import { LobbyService } from './lobby.service';

@Component({
  selector: 'dmn-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
})
export class LobbyComponent implements OnInit {
  register: FormGroup;
  creatingRoom = false;

  constructor(private fb: FormBuilder, private lobbyService: LobbyService) {}

  ngOnInit(): void {
    this.register = this.fb.group({
      name: '',
    });

    this.lobbyService.rooms$;
  }

  get rooms() {
    return this.lobbyService.rooms$;
  }

  @HostListener('click', ['$event'])
  lobbyClick(e) {
    this.creatingRoom = false;
  }

  createRoom(e) {
    e.stopPropagation();
    this.creatingRoom = true;
  }

  get applyOverlay() {
    return this.creatingRoom;
  }
}
