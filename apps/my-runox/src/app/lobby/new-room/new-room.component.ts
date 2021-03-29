import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'rnx-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.css'],
})
export class NewRoomComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log('Inciando Componente');
  }


ngOnDestroy():void{
  console.log('Destruyendo Componente');
}

  createRoom() {}
}
