import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { AuthService } from "src/app/shared/services/auth/auth.service";
import { NotificationsService } from "src/app/shared/services/notifications/notifications.service";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"],
})
export class NotificationComponent implements OnInit {
  // Check
  isGotNotification: boolean = false;

  // Image
  imgNotFound = "assets/icon/error-404.svg";
  imgNotiThumbnail = "assets/icon/faq.svg";

  // Data
  notifications = [];

  constructor(
    private authService: AuthService,
    private notificationService: NotificationsService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.notificationService.getUser(this.authService.userID).subscribe(
      (res) => {
        // console.log("res", res);
        this.notifications = res;
        if (this.notifications.length > 0) this.isGotNotification = true;
      },
      (err) => {
        console.error("err", err);
      }
    );
  }
}
