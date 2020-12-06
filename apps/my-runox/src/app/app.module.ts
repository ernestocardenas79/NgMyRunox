import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LobbyModule } from './lobby/lobby.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LobbyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
