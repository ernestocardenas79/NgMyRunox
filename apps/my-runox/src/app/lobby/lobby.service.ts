import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LobbyService {
  rooms$;

  constructor(private http: HttpClient) {
    this.rooms$ = this.http.get('./assets/data.json');
  }
}
