import { Component, OnInit } from '@angular/core';
import { AlertMessage } from '../models/alert-message';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

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
    if (this.alertMessage.level === 'dismiss') {
      this.showAlert = false;
      return;
    }

    this.showAlert = true;

    if (this.alertMessage.length) {
      setTimeout(() => this.showAlert = false, this.alertMessage.length);
    }
  }
}
