import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyRoutingModule } from './lobby-routing.module';
import { LobbyComponent } from './lobby.component';
import { RoomPreviewComponent } from './room-preview/room-preview.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [LobbyComponent, RoomPreviewComponent],
  imports: [
    CommonModule,
    LobbyRoutingModule,
    CoreModule
  ],
  exports:[LobbyComponent]
})
export class LobbyModule { }
