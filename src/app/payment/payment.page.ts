import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  username: string = ''; 
  note: string = '';
  dob: string = ''; 
  phoneNumber: string = ''; 
  selectedBank: string = ''; 
  amount: number = 0; 
  calculatedAmount: number = 0; 
  notificationMessage: string = '';
  showNotification: boolean = false;
  hideNotificationTimeout: any;

  constructor() {}

  ngOnInit() {}

  calculatePayment() {
    const requiredFields = [this.username, this.dob, this.phoneNumber, this.selectedBank, this.amount];

    if (requiredFields.some((field) => !field)) {
      this.notificationMessage = 'Vui lòng điền đầy đủ thông tin.';
      this.showNotification = true;
      this.hideNotificationAfterDelay();
      return;
    }

    // Payment calculation logic here
    this.calculatedAmount = this.amount * 0.3;

    this.notificationMessage = 'Thanh toán thành công!';
    this.showNotification = true;
    this.hideNotificationAfterDelay();
  }

  hideNotification() {
    this.showNotification = false;
    clearTimeout(this.hideNotificationTimeout);
  }

  hideNotificationAfterDelay() {
    this.hideNotificationTimeout = setTimeout(() => {
      this.hideNotification();
    }, 2000);
  }
}
