import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { forkJoin, Subscription } from 'rxjs';
import { buildingTypes } from 'src/app/shared/options/building-types';
import { House, HouseExtended } from 'src/app/shared/services/houses/houses.model';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { User, UserExtended } from 'src/app/shared/services/users/users.model';
import { UsersService } from 'src/app/shared/services/users/users.service';

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  // Data
  user: UserExtended
  houses: HouseExtended[] = []
  userID: any

  // Predefined
  buildingTypes = buildingTypes

  // Table
  tableEntries: number = 5
  tableSelected: any[] = []
  tableTemp = []
  tableActiveRow: any
  tableRows: any = []
  tableMessages = {
    emptyMessage: 'No record found',
    totalMessage: 'record'
  }
  SelectionType = SelectionType;

  // Checker
  isEmpty: boolean = true

  // Icon
  iconEmpty = 'assets/img/icons/box.svg'

  // Subscriber
  subscription: Subscription
  subscriptionActivate: Subscription
  subscriptionDeactivate: Subscription

  constructor(
    private houseService: HousesService,
    private userService: UsersService,
    private loadingBar: LoadingBarService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.userID = this.route.snapshot.queryParamMap.get('id')
    // console.log('Training ID', this.trainingID)
    if (!this.userID) {
      this.navigatePage('/admin/management/users')
    }

    if (
      this.userID && (
        typeof this.userID === 'string' || 
        this.userID instanceof String
      )
    ) {
      this.getData()
    }
    else {
      this.navigatePage('/admin/management/users')
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }

    if (this.subscriptionActivate) {
      this.subscriptionActivate.unsubscribe()
    }

    if (this.subscriptionDeactivate) {
      this.subscriptionDeactivate.unsubscribe()
    }
  }

  getData() {
    this.loadingBar.start()

    this.subscription = forkJoin([
      this.userService.getOne(this.userID),
      this.houseService.getOwnerHouses({'owner': this.userID})
    ]).subscribe(
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.user = this.userService.userExtended
        this.houses = this.houseService.houses
        this.tableRows = this.houses
        this.tableTemp = this.tableRows.map((prop, key) => {
          return {
            ...prop,
            id_index: key + 1
          };
        });

        if (this.tableTemp.length >= 1) {
          this.isEmpty = false
        }
        else {
          this.isEmpty = true
        }
      }
    )
  }

  navigatePage(path) {
    return this.router.navigate([path])
  }

  activate() {
    this.loadingBar.start()
    this.subscriptionActivate = this.userService.activate(this.user['id']).subscribe(
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.user = this.userService.userExtended
      }
    )
  }

  deactivate() {
    this.loadingBar.start()
    this.subscriptionDeactivate = this.userService.deactivate(this.user['id']).subscribe(
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.user = this.userService.userExtended
      }
    )
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value.toLowerCase();
    this.tableTemp = this.tableRows.filter(function (d) {
      return d.assessment_tax_account.toLowerCase().indexOf(val)!== -1 || !val;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

}
