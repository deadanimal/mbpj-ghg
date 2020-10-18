import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  public isGotNotification: boolean = true
  public imgNotFound = 'assets/icon/error-404.svg'
  public imgNotiThumbnail = 'assets/icon/calendar.svg'

  constructor() { }

  ngOnInit() {}

}
