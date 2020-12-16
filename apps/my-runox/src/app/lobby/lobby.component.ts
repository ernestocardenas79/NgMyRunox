import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Room} from '@myrunoxModel';

@Component({
  selector: 'dmn-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  room:Room;
  register:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.register =  this.fb.group({
      name: ''
    })
  }
}

