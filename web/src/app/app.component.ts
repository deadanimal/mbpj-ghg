import { Component } from "@angular/core";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { JwtService } from "./shared/handler/jwt/jwt.service";
import { UsersService } from "./shared/services/users/users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  constructor(
    private router: Router,
    private userService: UsersService,
    private jwtService: JwtService
  ) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        window.scrollTo(0, 0);
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
    
    if (
      this.router.url !== '/home'
    ) {
      this.checkToken()
    }
  }

  checkToken() {
    const token = this.jwtService.getToken('accessToken');

    if (token) {
      this.userService.getSelf().subscribe(
        (res) => { },
        (err) => { 
          if (err.error.code == 'token_not_valid') {
            this.jwtService.destroyToken()
          }
        },
        () => { }
      )
    }
  }

}
