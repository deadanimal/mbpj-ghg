import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/shared/services/notifications/notifications.model';
import { NotificationsService } from 'src/app/shared/services/notifications/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  // Data
  notifications: Notification[] = []

  // Checker
  isEmpty: boolean = true

  // Icon
  iconEmpty = 'assets/img/icons/box.svg'
  iconNotification = 'assets/img/icons/mail.svg'
  
  constructor(
    private notificationService: NotificationsService
  ) { }

  ngOnInit() {
  }

}
