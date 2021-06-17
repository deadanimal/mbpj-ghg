import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {
  
  tempFilterHouse
  tempHouse
  tempUser

  constructor(
    private router: Router,
    private houseService: HousesService,
    private userService: UsersService
  ) { 
    this.tempHouse = this.router.getCurrentNavigation().extras
    // console.log('tempHouse', this.tempHouse)
    this.getData()
  }

  ngOnInit() {
  }

  getData() {
    this.houseService.filter("id="+this.tempHouse.id).subscribe(
      (house) => {
        this.tempFilterHouse = house[0]
        // console.log('tempFilterHouse', this.tempFilterHouse)
      }
    )
  }
}
