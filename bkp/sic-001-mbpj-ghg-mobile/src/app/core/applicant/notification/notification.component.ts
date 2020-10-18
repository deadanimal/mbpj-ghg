import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  // Check
  isGotNotification: boolean = false

  // Image
  imgNotFound = 'assets/icon/error-404.svg'
  imgNotiThumbnail = 'assets/icon/faq.svg'

  // Data 
  notifications = []

  constructor(
  ) { }

  ngOnInit() {}

  getData() {
    // console.log(this.notifications)
  }

}
