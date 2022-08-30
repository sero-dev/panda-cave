import { Component, OnInit } from '@angular/core';
import { AlertMessage } from '../models/alert-message.model';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  currentTimeout: any
  showAlert: boolean = false
  alertMessage: AlertMessage = {
    message: 'Default Message',
    level: 'dismiss'
  }

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.alert.subscribe(
      (alert) => {
        this.alertMessage = alert
        this.showAlertMessage();
      }
    );
  }

  showAlertMessage(): void {
    clearTimeout(this.currentTimeout);

    if (this.alertMessage.level === 'dismiss') {
      this.showAlert = false;
      return;
    }

    this.showAlert = true;

    if (this.alertMessage.length) {
      this.currentTimeout = setTimeout(() => this.showAlert = false, this.alertMessage.length);
    }
  }
}
