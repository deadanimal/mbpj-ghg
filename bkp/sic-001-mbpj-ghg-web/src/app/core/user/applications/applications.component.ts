import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Application, MergedApplication } from 'src/app/shared/services/applications/applications.model';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';

import { AuthService } from 'src/app/shared/services/auth/auth.service';

import { User } from 'src/app/shared/services/auth/auth.model';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { House } from 'src/app/shared/services/houses/houses.model';
import { HousesService } from 'src/app/shared/services/houses/houses.service';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

class TableData {
  id: string
  applicant_id: string
  applicant_name: string
  evaluator_nominated_id: string
  evaluator_nominated_name: string
  applied_house: string
  status: string
  date_submitted: string
}

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  public tempApplications: Application[] = []
  public tempHouses: House[] = []
  public tempUsers: User[] = []
  public mergedApplications: MergedApplication[] = []

  tableColumns: string[] = [
    'applicant_name', 
    'date_submitted', 
    'applied_house_assessment_tax_account', 
    'evaluator_nominated_name', 
    'status', 
    'id'
  ]

  tableSource: MatTableDataSource<any>

  public pieChart
  public focus

  constructor(
    private zone: NgZone,
    private applicationService: ApplicationsService,
    private authService: AuthService,
    private houseService: HousesService,
    private userService: UsersService,
    private loadingBar: LoadingBarService,
    public toastr: ToastrService,
    public router: Router
  ) {
    this.mergeData()
  }

  ngOnInit() {
    this.initChart()
    this.initTable()
  }

  initTable() {
    this.tableSource = new MatTableDataSource<MergedApplication>(this.mergedApplications)
    this.tableSource.paginator = this.paginator;
    this.tableSource.sort = this.sort;
  }

  mergeData() {
    this.tempApplications = this.applicationService.retrievedApplications
    this.tempHouses = this.houseService.retrievedHouses
    this.tempUsers = this.userService.users
    let mergerCounter: number = 0
    console.log('1: ', this.tempApplications)
    console.log('2: ', this.tempHouses)
    console.log('3: ', this.tempUsers)
    
    this.tempApplications.forEach(
      (application: Application) => {
        this.tempHouses.forEach(
          (house: House) => {
            if (house.id == application.applied_house){
              this.tempUsers.forEach(
                (applicant: User) => {
                  if (applicant.id == application.applicant){
                    if (application.evaluator_nominated){
                      this.tempUsers.forEach(
                        (evaluator: User) => {
                          if (evaluator.id == application.evaluator_nominated){
                            this.mergedApplications.push({
                              id: application.id,
                              applicant_id: application.applicant,
                              applicant_name: applicant.full_name,
                              evaluator_nominated_id: application.evaluator_nominated,
                              evaluator_nominated_name: evaluator.full_name,
                              applied_house_id: application.applied_house,
                              applied_house_assessment_tax_account: house.assessment_tax_account,
                              status: application.status,
                              date_submitted: moment(application.date_submitted, 'YYYY-MM-DD').format('DD/MM/YYYY')
                            })
                          }
                        }
                      )
                    }
                    else {
                      this.mergedApplications.push({
                        id: application.id,
                        applicant_id: application.applicant,
                        applicant_name: applicant.full_name,
                        evaluator_nominated_id: application.evaluator_nominated,
                        evaluator_nominated_name: 'Not assigned',
                        applied_house_id: application.applied_house,
                        applied_house_assessment_tax_account: house.assessment_tax_account,
                        status: application.status,
                        date_submitted: moment(application.date_submitted, 'YYYY-MM-DD').format('DD/MM/YYYY')
                      })
                    }
                  }
                }
              )
            }
          }
        )
        mergerCounter++
        if (mergerCounter === this.tempApplications.length) {
          this.tableSource = new MatTableDataSource<MergedApplication>(this.mergedApplications)
          this.tableSource.paginator = this.paginator;
          this.tableSource.sort = this.sort;
          console.log(this.mergedApplications)
        }
        
      }
    )

  }

  refreshData() {
    this.loadingBar.start()
    this.applicationService.doRetrieveAllApplications().subscribe(
      () => {
      },
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.mergeData()
        this.loadingBar.complete()
        this.successfulRefreshToastr()
      }
    )
    this.userService.getAll().subscribe(
      () => {
      },
      () => {
      },
      () => {
      }
    )
    this.houseService.getAll().subscribe(
      () => {
      },
      () => {
      },
      () => {
      }
    )
  }

  doFilterTable(filterValue: string) {
    this.tableSource.filter = filterValue.trim().toLowerCase()
    console.log(this.tableSource.filter)
  }

  initChart() {
    this.zone.runOutsideAngular(() => {
      // Create chart
      this.pieChart = am4core.create("chartdiv", am4charts.PieChart);
      this.pieChart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      this.pieChart.align = "center"
      this.pieChart.width = am4core.percent(50)
      this.pieChart.fontSize ="10"
      this.pieChart.data = [
        {
          country: "Completed",
          value: 260,
          color: am4core.color("#28b463")
        },
        {
          country: "Rejected",
          value: 230,
          color: am4core.color("#a93226")
        },
        {
          country: "In Evaluation",
          value: 200,
          color: am4core.color("#f1c40f")
        },
        {
          country: "Site visit",
          value: 165,
          color: am4core.color("#ca6f1e")
        },
        {
          country: "Submitted",
          value: 128,
          color: am4core.color("#2471a3")
        }
      ];

      let series = this.pieChart.series.push(new am4charts.PieSeries());
      series.dataFields.value = "value";
      series.dataFields.radiusValue = "value";
      series.dataFields.category = "country";
      series.slices.template.cornerRadius = 6;
      series.colors.step = 3;
      series.slices.template.propertyFields.fill = "color";

      series.hiddenState.properties.endAngle = -90;

      this.pieChart.legend = new am4charts.Legend();

    })
  }

  doViewDetail(selectedApplication) {
    console.log(selectedApplication)
    this.router.navigate(['/applications/details'], selectedApplication)
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.pieChart) {
        this.pieChart.dispose()
      }
    })
  }

  successfulRefreshToastr() {
    this.toastr.show(
      '<span class="alert-icon fas fa-check-circle" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Refreshed</span> <span data-notify="message">Users list refreshed</span></div>',
      '',
      {
        timeOut: 3000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: true,
        titleClass: 'alert-title',
        positionClass: 'toast-top-right',
        toastClass: "ngx-toastr alert alert-dismissible alert-success alert-notify",
      }
    )
  }

  openSearch() {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function () {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  }

  closeSearch() {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  }

}
