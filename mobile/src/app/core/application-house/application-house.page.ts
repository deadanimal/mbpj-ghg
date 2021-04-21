import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/shared/services/houses/houses.model';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-application-house',
  templateUrl: './application-house.page.html',
  styleUrls: ['./application-house.page.scss'],
})
export class ApplicationHousePage implements OnInit {

  // Data
  houses: House[] = []

  // Image
  iconError = 'assets/img/icon/error-404.svg'

  // Checker
  isMyHomesEmpty = true

  constructor(
    private authService: AuthService,
    private houseService: HousesService,
    private router: Router
  ) { 
    this.getData()
  }

  ngOnInit() {
    // Refresh data of each navigation
    this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
            this.getData()
        }
      });
  }

  ngOnDestroy() {
  }

  getData() {
    // Get all house data
    let fieldOwner = 'owner=' + this.authService.userID
    if (this.authService.userID) {
      this.houseService.filter(fieldOwner).subscribe(
        () => {
          this.houses = this.houseService.housesFiltered
        },
        () => {},
        () => {
          if (this.houses.length >= 1) {
            this.isMyHomesEmpty = false
          }
        }
      )
    }
  }

  proceed(house) {
    // Proceed to next page after select house
    let path = '/application/apply'
    let extras = house
    this.router.navigate([path], extras)
      .catch(
        (err) => {
          // console.log(err)
        }
      )
  }

}
