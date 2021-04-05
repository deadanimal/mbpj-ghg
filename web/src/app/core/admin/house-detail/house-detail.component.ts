import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseExtended, HouseTemp } from 'src/app/shared/services/houses/houses.model';

import * as moment from 'moment';
import { buildingTypes } from 'src/app/shared/options/building-types';
import { relationTypes } from 'src/app/shared/options/relation-types';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { Subscription } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

  // Data
  house: HouseExtended
  houseID: any
  fullAddress: string = ''

  // Predefined
  houseTypes = buildingTypes
  relationshipTypes = relationTypes

  // Checker
  isEmpty: boolean = true

  // Icon
  iconError = 'assets/img/icons/cancel.svg'

  // Subscriber
  subscription: Subscription

  constructor(
    private loadingBar: LoadingBarService,
    private route: ActivatedRoute,
    private router: Router,
    private houseService: HousesService
  ) { 
    this.houseID = String(this.route.snapshot.queryParamMap.get('id'))
    // console.log(this.house.id)
    if (!this.houseID) {
      this.navigatePage('/admin/house')
    }

    if (
      this.houseID && (
        typeof this.houseID === 'string' || 
        this.houseID instanceof String
      )
    ) {
      this.getData()
    }
    else {
      this.navigatePage('/admin/house')
    }
  }

  ngOnInit() {
  }

  getData() {
    this.loadingBar.start()
    this.subscription = this.houseService.getOne(this.houseID).subscribe(
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
        this.isEmpty = true
      },
      () => {
        this.house = this.houseService.houseExtended
        this.isEmpty = false
        
        this.fullAddress = this.house['address_1']

        if (this.house['address_2']) {
          this.fullAddress = this.fullAddress + this.house['address_2']
        }

        if (this.house['address_3']) {
          this.fullAddress = this.fullAddress + this.house['address_3']
        }

        this.houseTypes.forEach(
          (type) => {
            if (type['value'] === this.house['building_type']) {
              this.house['building_type'] = type['text']
            }
          }
        )

        this.relationshipTypes.forEach(
          (type) => {
            if (type['value'] === this.house['relationship_type']) {
              this.house['relationship_type'] = type['text']
            }
          }
        )
      }
    )
  }

  navigatePage(path: string) {
    return this.router.navigate([path])
  }

}
