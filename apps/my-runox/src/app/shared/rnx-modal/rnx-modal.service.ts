import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RnxModalService  {

  private subject = new Subject()

  close$: Observable<any> = this.subject.asObservable();

  close() {
    this.subject.next();
  }

  constructor() {
    console.log('Inciando Servicio');
   }
}
