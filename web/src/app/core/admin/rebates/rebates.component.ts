import { Component, OnInit } from '@angular/core';

import { forkJoin } from 'rxjs';
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
import { Rebate, RebateTemp } from 'src/app/shared/services/rebates/rebates.model';
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
  rebates: RebateTemp[] = []
  selectedRebate: RebateTemp

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

  constructor(
    private authService: AuthService,
    private applicationService: ApplicationsService,
    private rebateService: RebatesService,
    private userService: UsersService,
    private loadingBar: LoadingBarService,
    private router: Router
  ) { 
    this.getData()
  }

  ngOnInit() {
  }

  getData() {
    this.loadingBar.start()
    forkJoin(
      this.applicationService.getAll(),
      this.rebateService.getAll(),
      this.userService.getAll()
    ).subscribe(
      (res) => {
        this.loadingBar.complete()
        this.filterData()
      },
      (err) => {
        this.loadingBar.complete()
      }
    )
  }

  filterData() {
    let filtering = new Promise(
      (resolve, reject) => {
        this.rebateService.rebates.forEach(
          (rebate: Rebate, index, array) => {
            this.applicationService.applications.forEach(
              (application: Application) => {
                if (rebate.application == application.id) {
                  this.userService.users.forEach(
                    (user: User) => {
                      if (application.applicant == user.id) {
                        let created = moment(rebate.created_at).format('DD/MM/YYYY')
                        this.rebates.push({
                          id: rebate.id,
                          application: rebate.application,
                          applicant: user.full_name,
                          amount_approved: rebate.amount_approved,
                          created_at: created,
                          modified_at: rebate.modified_at
                        })
                      }
                    }
                  )
                }
              }
            )
            if (index == array.length - 1) resolve();
          }
        )
      }
    )

    filtering.then(
      () => {
        this.tableRows = this.rebates
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

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value.toLowerCase();
    this.tableTemp = this.tableRows.filter(function (d) {
      return d.applicant.toLowerCase().indexOf(val)!== -1 || !val;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  navigatePage(path: string, extras) {
    this.router.navigate([path])
  }

}
