import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {
  
  tempHouse
  tempUser

  constructor(
    private router: Router,
    private userService: UsersService
  ) { 
    this.tempHouse = this.router.getCurrentNavigation().extras
  }

  ngOnInit() {
  }

}
