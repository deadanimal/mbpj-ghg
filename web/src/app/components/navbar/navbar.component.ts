import { Component, OnInit, ElementRef } from "@angular/core";
import { ROUTES } from "../../shared/menu/menu-items";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from "@angular/common";
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { User } from 'src/app/shared/services/users/users.model';
import { JwtService } from 'src/app/shared/handler/jwt/jwt.service';
import { Notification } from 'src/app/shared/services/notifications/notifications.model';
import { NotificationsService } from 'src/app/shared/services/notifications/notifications.service';
import { UsersService } from "src/app/shared/services/users/users.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {

  focus;
  listTitles: any[];
  location: Location;

  sidenavOpen: boolean = true;

  // Data
  user: User
  notifications: Notification[] = []
  notificationsLength: number = 0

  // Checker
  isNotificationEmpty: boolean = true

  // Image
  imgAvatar = 'assets/img/default/avatar.png'
  iconEmpty = 'assets/img/icons/box.svg'
  iconNotification = 'assets/img/icons/mail.svg'

  // Subscriber
  subscription: Subscription

  constructor(
    location: Location,
    private authService: AuthService,
    private notificationService: NotificationsService,
    private userService: UsersService,
    private jwtService: JwtService,
    private notifyService: NotifyService,
    private element: ElementRef,
    private router: Router
  ) {
    this.user = this.authService.userDetail
    this.notifications = this.notificationService.notifications
    this.location = location;
    this.router.events.subscribe((event: Event) => {
       if (event instanceof NavigationStart) {
           // Show loading indicator

       }
       if (event instanceof NavigationEnd) {
           // Hide loading indicator

           if (window.innerWidth < 1200) {
             document.body.classList.remove("g-sidenav-pinned");
             document.body.classList.add("g-sidenav-hidden");
             this.sidenavOpen = false;
           }
       }

       if (event instanceof NavigationError) {
           // Hide loading indicator

           // Present error to user
           console.log(event.error);
       }
   });

   this.checkToken()
  }

  ngOnInit() {
    // console.log('As: ', this.user)
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    // console.log('Title list', this.listTitles)
    
    if (this.notifications.length != 0) {
      this.isNotificationEmpty = false
      // console.log('qheqerqw', this.notifications)
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  checkToken() {
    const token = this.jwtService.getToken('accessToken');

    if (token) {
      this.subscription = this.userService.getSelf().subscribe(
        () => {
          this.user = this.userService.self
        },
        () => {},
        () => {}
      )
    }
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }

  navigatePage(path: String) {
    if (path == 'notifications') {
      return this.router.navigate(['/global/notifications'])
    }
    else if (path == 'profile') {
      return this.router.navigate(['/global/profile'])
    }
    else if (path == 'settings') {
      return this.router.navigate(['/global/settings'])
    }
    else if (path == 'home') {
      return this.router.navigate(['/auth/login'])
    }
  }

  successMessage() {
    let title = 'Success'
    let message = 'Loging in right now'
    this.notifyService.openToastrWarning(title, message)
  }

  viewNotification() {

  }

  logout() {
    this.jwtService.destroyToken()
    this.navigatePage('home')
  }

  openSearch() {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function() {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  }

  closeSearch() {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  }

  openSidebar() {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
      this.sidenavOpen = false;
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
      this.sidenavOpen = true;
    }
  }

  toggleSidenav() {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
      this.sidenavOpen = false;
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
      this.sidenavOpen = true;
    }
  }
}
