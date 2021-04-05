import { Component, OnInit } from '@angular/core';

import { forkJoin, Subscription } from 'rxjs';
import * as moment from 'moment';
import swal from 'sweetalert2';

import { User } from 'src/app/shared/services/users/users.model';
import { HouseTemp, House } from 'src/app/shared/services/houses/houses.model';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { Router } from '@angular/router';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { RebatesService } from 'src/app/shared/services/rebates/rebates.service';
import { Rebate, RebateExtended, RebateTemp } from 'src/app/shared/services/rebates/rebates.model';
import { Application } from 'src/app/shared/services/applications/applications.model';

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}
@Component({
  selector: 'app-rebates',
  templateUrl: './rebates.component.html',
  styleUrls: ['./rebates.component.scss']
})
export class RebatesComponent implements OnInit {

  // Data
  rebates: RebateExtended[] = []
  selectedRebate: RebateExtended

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

  constructor(
    private rebateService: RebatesService,
    private loadingBar: LoadingBarService,
    private router: Router
  ) { 
    this.getData()
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  getData() {
    this.loadingBar.start()
    this.subscription = forkJoin([
      this.rebateService.getAll()
    ]).subscribe(
      (res) => {
        this.loadingBar.complete()
        // this.filterData()
      },
      (err) => {
        this.loadingBar.complete()
      },
      () => {
        this.rebates = this.rebateService.rebates
        this.tableRows = [...this.rebates]
        this.tableTemp = this.tableRows.map((prop, key) => {
          return {
            ...prop
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

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value.toLowerCase();
    this.tableTemp = this.tableRows.filter(function (d) {
      return d.applicant?.full_name.toLowerCase().indexOf(val)!== -1 || !val;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  view(selected) {
    let path = '/admin/applications/detail'
    let extras = selected['application']['id']
    let queryParams = {
      queryParams: {
        id: extras
      }
    }

    return this.router.navigate([path], queryParams)
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

}
