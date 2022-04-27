import { EventEmitter, Injectable } from '@angular/core';
import { AlertMessage } from '../models/alert-message';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert = new EventEmitter<AlertMessage>();

  sendMessage(message: AlertMessage) {
    this.dismissMessage();
    this.alert.emit(message);
  }

  dismissMessage() {
    this.alert.emit({ message: '', level: 'dismiss' });
  }
}
