import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DmdModalServiceService {
  private modal = new Subject();
  close$ = this.modal.asObservable();

  close() {
    this.modal.next();
  }
}
