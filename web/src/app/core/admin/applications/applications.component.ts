import { Component, OnInit, NgZone } from '@angular/core';

import { forkJoin } from 'rxjs';
import * as moment from 'moment';
import swal from 'sweetalert2';

import { Application, ApplicationTemp } from 'src/app/shared/services/applications/applications.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { House } from 'src/app/shared/services/houses/houses.model';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { User } from 'src/app/shared/services/users/users.model';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Router } from '@angular/router';
am4core.useTheme(am4themes_animated);

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  // Data
  tempSubmitted: Application[] = []
  tempEvaluation: Application[] = []
  tempCompleted: Application[] = []
  totalJan: number = 0
  totalFeb: number = 0
  totalMar: number = 0
  totalApr: number = 0
  totalMay: number = 0
  totalJun: number = 0
  totalJul: number = 0
  totalAug: number = 0
  totalSep: number = 0
  totalOct: number = 0
  totalNov: number = 0
  totalDec: number = 0

  applications: Application[] = []
  applicationsSubmitted: ApplicationTemp[] = []
  applicationsEvaluation: ApplicationTemp[] = []
  applicationsCompleted: ApplicationTemp[] = []

  // Table
  tableSubmittedEntries: number = 5
  tableSubmittedSelected: any[] = []
  tableSubmittedTemp = []
  tableSubmittedActiveRow: any
  tableSubmittedRows: any = []
  tableEvaluationEntries: number = 5
  tableEvaluationSelected: any[] = []
  tableEvaluationTemp = []
  tableEvaluationActiveRow: any
  tableEvaluationRows: any = []
  tableCompletedEntries: number = 5
  tableCompletedSelected: any[] = []
  tableCompletedTemp = []
  tableCompletedActiveRow: any
  tableCompletedRows: any = []

  tableMessages = {
    emptyMessage: 'No records found',
    totalMessage: 'record'
  }
  SelectionType = SelectionType;

  // Checker
  isSubmittedEmpty: boolean = true
  isEvaluationEmpty: boolean = true
  isCompletedEmpty: boolean = true

  // Icon
  iconEmpty = 'assets/img/icons/box.svg'

  // Chart
  chart: any

  constructor(
    private authService: AuthService,
    private applicationService: ApplicationsService,
    private houseService: HousesService,
    private userService: UsersService,
    private loadingBar: LoadingBarService,
    private router: Router,
    private zone: NgZone
  ) { 
    this.getData()
  }

  ngOnInit() {
  }

  getData() {
    let filterSummitted = '&status=SM'
    let filterEvaluation = '&status=EV'
    let filterCompleted = '&status=CM'
    forkJoin(
      this.applicationService.filter(filterSummitted),
      this.applicationService.filter(filterEvaluation),
      this.applicationService.filter(filterCompleted),
      this.applicationService.getAll(),
      this.houseService.getAll(),
      this.userService.getAll()
    ).subscribe(
      (res) => {
        console.log('all', res)
        this.tempSubmitted = res[0]
        this.tempEvaluation = res[1]
        this.tempCompleted = res[2]
        this.applications = res[3]
        this.filterData()
      }
    );
  }

  filterData() {
    let filteringSubmitted = new Promise(
      (resolve, reject) => {
        console.log('Filter submitted')
        this.tempEvaluation.forEach(
          (application: Application, index, array) => {
            let applicant = ''
            let evaluator = ''
            let isApplicantFound = false
            let isEvaluatorFound = false
            let created_at = moment(application.created_at).format('DD/MM/YYYY')
            let modified_at = moment(application.modified_at).format('DD/MM/YYYY')
            let electricity_bill_1_month = moment(application.electricity_bill_1_month).format('MM/YYYY')
            let electricity_bill_2_month = moment(application.electricity_bill_2_month).format('MM/YYYY')
            let electricity_bill_3_month = moment(application.electricity_bill_3_month).format('MM/YYYY')
            let water_bill_1_month = moment(application.water_bill_1_month).format('MM/YYYY')
            let water_bill_2_month = moment(application.water_bill_2_month).format('MM/YYYY')
            let water_bill_3_month = moment(application.water_bill_3_month).format('MM/YYYY')
            this.houseService.houses.forEach(
              (house: House) => {
                if (application.applied_house == house.id) {
                  this.userService.users.forEach(
                    (user: User) => {
                      if (isApplicantFound && isEvaluatorFound) {
                        this.applicationsSubmitted.push({
                          id: application.id,
                          applicant: application.applicant,
                          applicant_name: user.full_name,
                          evaluator_nominated: application.evaluator_nominated,
                          evaluator_nominated_name: user.full_name,
                          status: application.status,
                          applied_house: application.applied_house,
                          applied_house_assessment_tax_account: house.assessment_tax_account,
                          total_lamp: application.total_lamp,
                          total_led: application.total_led,
                          vehicle_car: application.vehicle_car,
                          vehicle_motorcycle: application.vehicle_motorcycle,
                          vehicle_bicycle: application.vehicle_bicycle,
                          vehicle_other: application.vehicle_other,
                          electricity_bill_1_month: electricity_bill_1_month,
                          electricity_bill_1_usage: application.electricity_bill_1_usage,
                          electricity_bill_1_doc: application.electricity_bill_1_doc,
                          electricity_bill_2_month: electricity_bill_2_month,
                          electricity_bill_2_usage: application.electricity_bill_2_usage,
                          electricity_bill_2_doc: application.electricity_bill_2_doc,
                          electricity_bill_3_month: electricity_bill_3_month,
                          electricity_bill_3_usage: application.electricity_bill_3_usage,
                          electricity_bill_3_doc: application.electricity_bill_3_doc,
                          water_bill_1_month: water_bill_1_month,
                          water_bill_1_usage: application.water_bill_1_usage,
                          water_bill_1_doc: application.water_bill_1_doc,
                          water_bill_2_month: water_bill_2_month,
                          water_bill_2_usage: application.water_bill_2_usage,
                          water_bill_2_doc: application.water_bill_2_doc,
                          water_bill_3_month: water_bill_3_month,
                          water_bill_3_usage: application.water_bill_3_usage,
                          water_bill_3_doc: application.water_bill_3_doc,
                          created_at: created_at,
                          modified_at: modified_at
                        })
                      }
                      else {
                        if (house.owner == user.id) {
                          applicant = user.full_name
                          isApplicantFound = true
                        }
                        if (application.evaluator_nominated == user.id) {
                          evaluator = user.full_name
                          isEvaluatorFound = true
                        }
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

    let filteringEvaluation = new Promise(
      (resolve, reject) => {
        console.log('Filter evaluation')
        this.tempEvaluation.forEach(
          (application: Application, index, array) => {
            let applicant = ''
            let evaluator = ''
            let isApplicantFound = false
            let isEvaluatorFound = false
            let created_at = moment(application.created_at).format('DD/MM/YYYY')
            let modified_at = moment(application.modified_at).format('DD/MM/YYYY')
            let electricity_bill_1_month = moment(application.electricity_bill_1_month).format('MM/YYYY')
            let electricity_bill_2_month = moment(application.electricity_bill_2_month).format('MM/YYYY')
            let electricity_bill_3_month = moment(application.electricity_bill_3_month).format('MM/YYYY')
            let water_bill_1_month = moment(application.water_bill_1_month).format('MM/YYYY')
            let water_bill_2_month = moment(application.water_bill_2_month).format('MM/YYYY')
            let water_bill_3_month = moment(application.water_bill_3_month).format('MM/YYYY')
            this.houseService.houses.forEach(
              (house: House) => {
                if (application.applied_house == house.id) {
                  this.userService.users.forEach(
                    (user: User) => {
                      if (isApplicantFound && isEvaluatorFound) {
                        this.applicationsEvaluation.push({
                          id: application.id,
                          applicant: application.applicant,
                          applicant_name: user.full_name,
                          evaluator_nominated: application.evaluator_nominated,
                          evaluator_nominated_name: user.full_name,
                          status: application.status,
                          applied_house: application.applied_house,
                          applied_house_assessment_tax_account: house.assessment_tax_account,
                          total_lamp: application.total_lamp,
                          total_led: application.total_led,
                          vehicle_car: application.vehicle_car,
                          vehicle_motorcycle: application.vehicle_motorcycle,
                          vehicle_bicycle: application.vehicle_bicycle,
                          vehicle_other: application.vehicle_other,
                          electricity_bill_1_month: electricity_bill_1_month,
                          electricity_bill_1_usage: application.electricity_bill_1_usage,
                          electricity_bill_1_doc: application.electricity_bill_1_doc,
                          electricity_bill_2_month: electricity_bill_2_month,
                          electricity_bill_2_usage: application.electricity_bill_2_usage,
                          electricity_bill_2_doc: application.electricity_bill_2_doc,
                          electricity_bill_3_month: electricity_bill_3_month,
                          electricity_bill_3_usage: application.electricity_bill_3_usage,
                          electricity_bill_3_doc: application.electricity_bill_3_doc,
                          water_bill_1_month: water_bill_1_month,
                          water_bill_1_usage: application.water_bill_1_usage,
                          water_bill_1_doc: application.water_bill_1_doc,
                          water_bill_2_month: water_bill_2_month,
                          water_bill_2_usage: application.water_bill_2_usage,
                          water_bill_2_doc: application.water_bill_2_doc,
                          water_bill_3_month: water_bill_3_month,
                          water_bill_3_usage: application.water_bill_3_usage,
                          water_bill_3_doc: application.water_bill_3_doc,
                          created_at: created_at,
                          modified_at: modified_at
                        })
                      }
                      else {
                        if (house.owner == user.id) {
                          applicant = user.full_name
                          isApplicantFound = true
                        }
                        if (application.evaluator_nominated == user.id) {
                          evaluator = user.full_name
                          isEvaluatorFound = true
                        }
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

    let filteringCompleted = new Promise(
      (resolve, reject) => {
        console.log('Filter completed')
        this.tempCompleted.forEach(
          (application: Application, index, array) => {
            let applicant = ''
            let evaluator = ''
            let isApplicantFound = false
            let isEvaluatorFound = false
            let created_at = moment(application.created_at).format('DD/MM/YYYY')
            let modified_at = moment(application.modified_at).format('DD/MM/YYYY')
            let electricity_bill_1_month = moment(application.electricity_bill_1_month).format('MM/YYYY')
            let electricity_bill_2_month = moment(application.electricity_bill_2_month).format('MM/YYYY')
            let electricity_bill_3_month = moment(application.electricity_bill_3_month).format('MM/YYYY')
            let water_bill_1_month = moment(application.water_bill_1_month).format('MM/YYYY')
            let water_bill_2_month = moment(application.water_bill_2_month).format('MM/YYYY')
            let water_bill_3_month = moment(application.water_bill_3_month).format('MM/YYYY')
            this.houseService.houses.forEach(
              (house: House) => {
                if (application.applied_house == house.id) {
                  this.userService.users.forEach(
                    (user: User) => {
                      if (isApplicantFound && isEvaluatorFound) {
                        this.applicationsEvaluation.push({
                          id: application.id,
                          applicant: application.applicant,
                          applicant_name: user.full_name,
                          evaluator_nominated: application.evaluator_nominated,
                          evaluator_nominated_name: user.full_name,
                          status: application.status,
                          applied_house: application.applied_house,
                          applied_house_assessment_tax_account: house.assessment_tax_account,
                          total_lamp: application.total_lamp,
                          total_led: application.total_led,
                          vehicle_car: application.vehicle_car,
                          vehicle_motorcycle: application.vehicle_motorcycle,
                          vehicle_bicycle: application.vehicle_bicycle,
                          vehicle_other: application.vehicle_other,
                          electricity_bill_1_month: electricity_bill_1_month,
                          electricity_bill_1_usage: application.electricity_bill_1_usage,
                          electricity_bill_1_doc: application.electricity_bill_1_doc,
                          electricity_bill_2_month: electricity_bill_2_month,
                          electricity_bill_2_usage: application.electricity_bill_2_usage,
                          electricity_bill_2_doc: application.electricity_bill_2_doc,
                          electricity_bill_3_month: electricity_bill_3_month,
                          electricity_bill_3_usage: application.electricity_bill_3_usage,
                          electricity_bill_3_doc: application.electricity_bill_3_doc,
                          water_bill_1_month: water_bill_1_month,
                          water_bill_1_usage: application.water_bill_1_usage,
                          water_bill_1_doc: application.water_bill_1_doc,
                          water_bill_2_month: water_bill_2_month,
                          water_bill_2_usage: application.water_bill_2_usage,
                          water_bill_2_doc: application.water_bill_2_doc,
                          water_bill_3_month: water_bill_3_month,
                          water_bill_3_usage: application.water_bill_3_usage,
                          water_bill_3_doc: application.water_bill_3_doc,
                          created_at: created_at,
                          modified_at: modified_at
                        })
                      }
                      else {
                        if (house.owner == user.id) {
                          applicant = user.full_name
                          isApplicantFound = true
                        }
                        if (application.evaluator_nominated == user.id) {
                          evaluator = user.full_name
                          isEvaluatorFound = true
                        }
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

    let filteringChart = new Promise(
      (resolve, reject) => {
        console.log('Filter chart')
        if (this.applications.length == 0) resolve();

        this.applications.forEach(
          (application: Application, index, array) => {
            let checkerDate = moment(application.created_at, 'DD/MM/YYYY')
            let checkerMonth = checkerDate.month()
            if (checkerDate.year() == moment().year()) {
              if (checkerMonth == 0) {
                this.totalJan += 1
              }
              else if (checkerMonth == 1) {
                this.totalFeb += 1
              }
              else if (checkerMonth == 2) {
                this.totalMar += 1
              }
              else if (checkerMonth == 3) {
                this.totalApr += 1
              }
              else if (checkerMonth == 4) {
                this.totalMay += 1
              }
              else if (checkerMonth == 5) {
                this.totalJun += 1
              }
              else if (checkerMonth == 6) {
                this.totalJul += 1
              }
              else if (checkerMonth == 7) {
                this.totalAug += 1
              }
              else if (checkerMonth == 8) {
                this.totalSep += 1
              }
              else if (checkerMonth == 9) {
                this.totalOct += 1
              }
              else if (checkerMonth == 10) {
                this.totalNov += 1
              }
              else if (checkerMonth == 11) {
                this.totalDec += 1
              }
            }
            if (index == array.length - 1) resolve();
          }
        )
      }
    )

    filteringSubmitted.then(
      () => {
        console.log('Promise submitted')
        this.tableSubmittedRows = this.applicationsSubmitted
        this.tableSubmittedTemp = this.tableSubmittedRows.map((prop, key) => {
          return {
            ...prop,
            id_index: key + 1
          };
        });

        if (this.tableSubmittedTemp.length >= 1) {
          this.isSubmittedEmpty = false
        }
        else {
          this.isSubmittedEmpty = true
        }

        // this.getChart()
      }
    )

    filteringEvaluation.then(
      () => {
        console.log('Promise evaluation')
        this.tableEvaluationRows = this.applicationsEvaluation
        this.tableEvaluationTemp = this.tableEvaluationRows.map((prop, key) => {
          return {
            ...prop,
            id_index: key + 1
          };
        });

        if (this.tableEvaluationTemp.length >= 1) {
          this.isEvaluationEmpty = false
        }
        else {
          this.isEvaluationEmpty = true
        }

        // this.getChart()
      }
    )

    filteringCompleted.then(
      () => {
        console.log('Promise completed')
        this.tableCompletedRows = this.applicationsCompleted
        this.tableCompletedTemp = this.tableCompletedRows.map((prop, key) => {
          return {
            ...prop,
            id_index: key + 1
          };
        });

        if (this.tableCompletedTemp.length >= 1) {
          this.isCompletedEmpty = false
        }
        else {
          this.isCompletedEmpty = true
        }

        // this.getChart()
      }
    )

    filteringChart.then(
      () => {
        console.log('filter chart')
        this.zone.runOutsideAngular(
          () => {
            this.getChart()
          }
        )
      }
    )

  }

  entriesChange($event, type: string) {
    if (type == 'SM') {
      this.tableSubmittedEntries = $event.target.value;
    }
    else if (type == 'EV') {
      this.tableEvaluationEntries = $event.target.value;
    }
    else if (type == 'CM') {
      this.tableCompletedEntries = $event.target.value;
    }
  }

  filterTable($event, type: string) {
    let val = $event.target.value.toLowerCase();
    if (type == 'SM') {
      this.tableSubmittedTemp = this.tableSubmittedRows.filter(function (d) {
        return d.applicant_name.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
    if (type == 'EV') {
      this.tableEvaluationTemp = this.tableEvaluationRows.filter(function (d) {
        return d.applicant_name.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
    if (type == 'CM') {
      this.tableCompletedTemp = this.tableCompletedRows.filter(function (d) {
        return d.applicant_name.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }
  }

  onSelect({ selected }, type: string) {
    if (type == 'SM') {
      this.tableSubmittedSelected.splice(0, this.tableSubmittedSelected.length);
      this.tableSubmittedSelected.push(...selected);
    }
    else if (type == 'EV') {
      this.tableEvaluationSelected.splice(0, this.tableEvaluationSelected.length);
      this.tableEvaluationSelected.push(...selected);
    }
    else if (type == 'CM') {
      this.tableCompletedSelected.splice(0, this.tableCompletedSelected.length);
      this.tableCompletedSelected.push(...selected);
    }
  }

  onActivate(event, type: string) {
    if (type == 'SM') {
      this.tableSubmittedActiveRow = event.row;
    }
    else if (type == 'EV') {
      this.tableEvaluationActiveRow = event.row;
    }
    else if (type == 'CM') {
      this.tableCompletedActiveRow = event.row;
    }
  }

  getChart() {
    console.log('Get chart')
    let chart = am4core.create("chart-application-summary", am4charts.XYChart);

    // Add data
    chart.data = [{
      "month": "Jan",
      "total": this.totalJan
    }, {
      "month": "Feb",
      "total": this.totalFeb
    }, {
      "month": "Mar",
      "total": this.totalMar
    }, {
      "month": "Apr",
      "total": this.totalApr
    }, {
      "month": "May",
      "total": this.totalMay
    }, {
      "month": "Jun",
      "total": this.totalJun
    }, {
      "month": "Jul",
      "total": this.totalJul
    }, {
      "month": "Aug",
      "total": this.totalAug
    }, {
      "month": "Sep",
      "total": this.totalSep
    }, {
      "month": "Oct",
      "total": this.totalOct
    }, {
      "month": "Nov",
      "total": this.totalNov
    }, {
      "month": "Dec",
      "total": this.totalDec
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    // categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;
    valueAxis.min = 0

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "total";
    series.dataFields.categoryX = "month";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();
  }

}
