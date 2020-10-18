import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseTemp } from 'src/app/shared/services/houses/houses.model';

import * as moment from 'moment';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

  // Data
  house: HouseTemp

  // Checker
  isEmpty: boolean = true

  // Icon
  iconError = 'assets/img/icons/cancel.svg'

  constructor(
    private router: Router
  ) { 
    this.house = this.router.getCurrentNavigation().extras as HouseTemp
    // console.log(this.house.id)
    if (!this.house) {
      this.router.navigate(['/admin/house'])
    }
  }

  ngOnInit() {
    this.initData()
  }

  initData() {
    if (this.house.id) {
      console.log(this.house.created_at)
      console.log(this.house.staying_since)
      let dateRegistered = moment(this.house.created_at).format('DD/MM/YYYY')
      let dateStayingSince = moment(this.house.staying_since).format('MM/YYYY')
      let relationshipType = this.house.relationship_type
      let buildingType = this.house.building_type
      
      console.log(dateRegistered)
      console.log(dateStayingSince)

      this.isEmpty = false
      this.house.created_at = dateRegistered
      this.house.staying_since = dateStayingSince

      if (relationshipType == 'SL') {
        this.house.relationship_type = 'Self'
      }
      else if (relationshipType == 'SP') {
        this.house.relationship_type = 'Spouse'
      }
      else if (relationshipType == 'SB') {
        this.house.relationship_type = 'Siblings'
      }
      else if (relationshipType == 'PR') {
        this.house.relationship_type = 'Parents'
      }
      else if (relationshipType == 'CH') {
        this.house.relationship_type = 'Children'
      }

      if (buildingType == 'CD') {
        this.house.building_type = 'Condominium'
      }
      else if (buildingType == 'FL') {
        this.house.building_type = 'Flat'
      }
      else if (buildingType == 'TO') {
        this.house.building_type = 'Townhouse'
      }
      else if (buildingType == 'TE') {
        this.house.building_type = 'Terrace House'
      }
      else if (buildingType == 'BS') {
        this.house.building_type = 'Bungalow / Semidetached'
      }
      else if (buildingType == 'AS') {
        this.house.building_type = 'Apartment / Service Apartment'
      }
      else if (buildingType == 'OT') {
        this.house.building_type = 'Others'
      }
    }
    else {
      this.isEmpty = true
    }
  }

}
