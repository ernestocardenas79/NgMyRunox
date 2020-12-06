import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyRoutingModule } from './lobby-routing.module';
import { LobbyComponent } from './lobby.component';
import { RoomPreviewComponent } from './room-preview/room-preview.component';


@NgModule({
  declarations: [LobbyComponent, RoomPreviewComponent],
  imports: [
    CommonModule,
    LobbyRoutingModule
  ],
  exports:[LobbyComponent]
})
export class LobbyModule { }
