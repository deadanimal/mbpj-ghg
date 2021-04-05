import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/services/users/users.model';
import { UsersService } from 'src/app/shared/services/users/users.service';

import * as moment from 'moment';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
am4core.useTheme(am4themes_animated);

import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { forkJoin, Subscription } from 'rxjs';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrls: ['./management-user.component.scss']
})
export class ManagementUserComponent implements OnInit, OnDestroy {

  // Data
  users: User[] = []

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp: User[] = [];
  tableActiveRow: any;
  tableRows: User[] = []
  SelectionType = SelectionType;

  // Chart
  chart: any
  chartJan: number = 0
  chartFeb: number = 0
  chartMar: number = 0
  chartApr: number = 0
  chartMay: number = 0
  chartJun: number = 0
  chartJul: number = 0
  chartAug: number = 0
  chartSep: number = 0
  chartOct: number = 0
  chartNov: number = 0
  chartDec: number = 0

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: 'modal-dialog-centered'
  };

  // Form
  registerForm: FormGroup
  registerFormMessages = {
    'name': [
      { type: 'required', message: 'Name is required' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'A valid email is required' }
    ]
  }

  // Subscriber
  subscription: Subscription

  constructor(
    private userService: UsersService,
    private loadingBar: LoadingBarService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private zone: NgZone
  ) {
    this.getData()
  }

  ngOnInit() {
    this.initForm()
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe
    }

    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
    })
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ]))
    })
  }

  getData() {
    this.loadingBar.start()

    this.subscription = forkJoin([
      this.userService.getAll(),
      this.userService.getStatistics()
    ]).subscribe(
      (res) => {
        this.users = this.userService.users
        this.loadingBar.complete()
      },
      (err) => {
        this.loadingBar.complete()
      },
      () => {
        this.loadTable()
        this.getCharts()
      }
    )
  }

  loadTable() {
    this.users.forEach(
      (user: User) => {
        user['date_joined'] = moment(user['date_joined']).format('DD/MM/YYYY HH:mm')

        if (user['user_type'] == 'SA') {
          user['user_type_mapped'] = 'Super Admin'
        }
        else if (user['user_type'] == 'AD') {
          user['user_type_mapped'] = 'Admin'
        }
        else if (user['user_type'] == 'AP') {
          user['user_type_mapped'] = 'Applicant'
        }
        else if (user['user_type'] == 'EV') {
          user['user_type_mapped'] = 'Evaluator'
        }

        if (user['is_active']) {
          user['is_active_mapped'] = 'Active'
        }
        else {
          user['is_active_mapped'] = 'Inactive'
        }
      }
    )

    this.tableRows = [...this.users]
    this.tableTemp = this.tableRows.map((prop, key) => {
      return {
        ...prop
      };
    });
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value.toLowerCase();
    this.tableTemp = this.tableRows.filter(function (d) {
      if (d.full_name) {
        return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
      }
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart()
    })
  }

  getChart() {
    let chart = am4core.create('chart-user-month', am4charts.XYChart);

    // Add data
    chart.data = [
      {
        'month': 'Jan',
        'count': this.userService.userStatistics['total_current_jan']
      }, 
      {
        'month': 'Feb',
        'count': this.userService.userStatistics['total_current_feb']
      }, 
      {
        'month': 'Mar',
        'count': this.userService.userStatistics['total_current_mar']
      }, 
      {
        'month': 'Apr',
        'count': this.userService.userStatistics['total_current_apr']
      }, 
      {
        'month': 'May',
        'count': this.userService.userStatistics['total_current_may']
      }, 
      {
        'month': 'Jun',
        'count': this.userService.userStatistics['total_current_jun']
      }, 
      {
        'month': 'Jul',
        'count': this.userService.userStatistics['total_current_jul']
      }, 
      {
        'month': 'Aug',
        'count': this.userService.userStatistics['total_current_aug']
      }, 
      {
        'month': 'Sep',
        'count': this.userService.userStatistics['total_current_sep']
      }, 
      {
        'month': 'Oct',
        'count': this.userService.userStatistics['total_current_oct']
      }, 
      {
        'month': 'Nov',
        'count': this.userService.userStatistics['total_current_nov']
      }, 
      {
        'month': 'Dec',
        'count': this.userService.userStatistics['total_current_dec']
      }
  ];

    // Create axes

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'month';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add('dy', function (dy, target) {
      if (target.dataItem && target.dataItem.index && 2 == 2) {
        return dy + 25;
      }
      return dy;
    });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'count';
    series.dataFields.categoryX = 'month';
    series.name = 'count';
    series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    this.chart = chart
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    this.registerForm.reset()
  }

  confirm() {
    swal.fire({
      title: 'Confirmation',
      text: 'Are you sure to create this new user?',
      type: 'info',
      buttonsStyling: false,
      confirmButtonClass: 'btn btn-info',
      confirmButtonText: 'Confirm',
      showCancelButton: true,
      cancelButtonClass: 'btn btn-danger',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: 'Success',
      text: 'A new user has been created!',
      type: 'success',
      buttonsStyling: false,
      confirmButtonClass: 'btn btn-success',
      confirmButtonText: 'Close'
    }).then((result) => {
      if (result.value) {
        this.modal.hide()
        this.registerForm.reset()
      }
    })
  }

  view(selected) {
    let path = '/admin/management/users/detail'
    let extras = selected['id']
    let queryParams = {
      queryParams: {
        id: extras
      }
    }

    return this.router.navigate([path], queryParams)
  }

}
