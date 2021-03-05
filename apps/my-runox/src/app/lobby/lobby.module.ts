import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from '../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { LobbyRoutingModule } from './lobby-routing.module';

import { RoomPreviewComponent } from './room-preview/room-preview.component';
import { LobbyComponent } from './lobby.component';

import { LobbyService } from './lobby.service';

@NgModule({
  declarations: [LobbyComponent, RoomPreviewComponent],
  imports: [
    CommonModule,
    LobbyRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [LobbyService],
  exports: [LobbyComponent],
})
export class LobbyModule {}
