import { Component, OnInit, TemplateRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

import { User } from 'src/app/shared/services/auth/auth.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { RebatesService } from 'src/app/shared/services/rebates/rebates.service';
import { UsersService } from 'src/app/shared/services/users/users.service';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Application } from 'src/app/shared/services/applications/applications.model';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Data
  totalApplicants: number = 0
  totalApplications: number = 0
  totalApplicationsSince2011: number = 0
  totalApprovedRebates: number = 0
  totalApprovedRebatesSince2011: number = 0
  totalApprovedApplications: number = 0
  totalApprovedApplicationsSince2011: number = 0

  dataElectricity: number = 0
  dataTransportation: number = 0
  dataWater: number = 0
  
  latestApplications: Application[] = []
  latestRegisteredApplicants: User[] = []
  latestEvaluatedApplications: Application[] = []

  selectedUser: User

  // Chart
  chartCarbon:  am4charts.XYChart3D

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  constructor(
    private authService: AuthService,
    private applicationService: ApplicationsService,
    private rebateService: RebatesService,
    private userService: UsersService,

    public router: Router,
    private modalService: BsModalService,
    public toastr: ToastrService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.initThings()
    console.log('testtt: ', this.latestApplications.length)
    this.retrieveLatestRegistration()
    this.retrieveLatestApplication()
    this.retrieveLatestEvaluated()
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.initCarbon()
    })
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chartCarbon) {
        this.chartCarbon.dispose()
      }
    })
  }

  retrieveLatestApplication() {
    let filterUrl: string = 'status=CR'
    let tempApplication
    this.applicationService.retrieveFilteredApplications(filterUrl).subscribe(
      (res) => {
        tempApplication = res
      },
      () => {},
      () => {
        let counter = 0
        tempApplication.forEach(
          (application: Application) => {
            application.date_submitted = moment(application.date_submitted).format("DD-MM-YYYY")
            if (this.latestApplications.length<5) {
              this.latestApplications.push(application)
            }
          }
        )
        console.log('app: ', this.latestApplications)
      }
    )
  }

  retrieveLatestRegistration() {
    let filterUrl: string = 'user_type=AP'
    let tempApplicant
    this.userService.filter(filterUrl).subscribe(
      (res) => {
        tempApplicant = res
      },
      () => {},
      () => {
        let counter = 0
        tempApplicant.forEach(
          (applicant: User) => {
            applicant.date_joined = moment(applicant.date_joined).format("DD-MM-YYYY")
            if (this.latestRegisteredApplicants.length<5) {
              this.latestRegisteredApplicants.push(applicant)
            }
          }
        )
        console.log(this.latestRegisteredApplicants)
      }
    )
  }

  retrieveLatestEvaluated() {
    let filterUrl: string = 'status=CR'
    let tempApplication
    this.applicationService.retrieveFilteredApplications(filterUrl).subscribe(
      (res) => {
        tempApplication = res
      },
      () => {},
      () => {
        let counter = 0
        tempApplication.forEach(
          (application: Application) => {
            application.date_submitted = moment(application.date_submitted).format("DD-MM-YYYY")
            if (this.latestEvaluatedApplications.length<5) {
              this.latestEvaluatedApplications.push(application)
            }
          }
        )
        console.log('evaluated: ', this.latestApplications)
      }
    )
  }

  openModal(modalRef: TemplateRef<any>, user) {
    console.log ('ref: ', modalRef)
    this.selectedUser = user
    this.modal = this.modalService.show(modalRef, this.modalConfig)
    // console.log(this.userInformationForm.value.email)
    // console.log(this.userInformationForm)
    // console.log(user)
  }

  closeModal() {
    if (this.selectedUser){
      delete this.selectedUser
    }
    this.modal.hide()
  }

  initCarbon() {

    let chart = am4core.create("chartdiv", am4charts.XYChart3D);

    chart.data = [
      {
        "usage": "Electric usage",
        "value": this.dataElectricity
      },
      {
        "usage": "Water usage",
        "value": this.dataWater
      },
      {
        "usage": "Transportation usage",
        "value": this.dataTransportation
      }
    ]

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "usage";
    categoryAxis.renderer.labels.template.rotation = 0;
    categoryAxis.renderer.labels.template.hideOversized = true;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.horizontalCenter = "middle";
    categoryAxis.renderer.labels.template.verticalCenter = "top";
    categoryAxis.tooltip.label.rotation = 0;
    categoryAxis.tooltip.label.horizontalCenter = "middle";
    categoryAxis.tooltip.label.verticalCenter = "top";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Carbon Emission (KG CO2)";
    valueAxis.title.fontWeight = "bold";
    valueAxis.min = 0

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "usage";
    series.name = "Type";
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color("#FFFFFF");

    columnTemplate.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })

    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineY.strokeOpacity = 0;

    this.chartCarbon = chart

  }

  initThings() {
    let tempUsers = []
    let tempApprovedApplications = []
    this.authService.retrievedUsers.forEach(
      (data) => {
        if (data.user_type == 'AP') {
          tempUsers.push(data)
        }
      }
    )
    this.applicationService.retrievedApplications.forEach(
      (data) => {
        if (data.status == 'AP') {
          tempApprovedApplications.push(data)
        }
      }
    )

    this.totalApplicants = tempUsers.length
    this.totalApplications = this.applicationService.retrievedApplications.length
    this.totalApprovedRebates = this.rebateService.retrievedRebates.length
    this.totalApprovedApplications = tempApprovedApplications.length
    // console.log('total: ', this.totalApplicants)


  }

  doApproveUser() {
    this.modal.hide()
    this.toastr.show(
      '<span class="alert-icon fas fa-check-circle" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Success</span> <span data-notify="message">You have succesfully approve a user</span></div>',
      '',
      {
        timeOut: 2000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: false,
        titleClass: 'alert-title',
        positionClass: 'toast-top-right',
        toastClass: "ngx-toastr alert alert-dismissible alert-success alert-notify",
      }
    );
  }

  viewApplication() {
    let applicationView: Object = {
      id: "7a7e3525-2720-4729-a8a1-4f71b263419d",
      applicant_id: "61ea9667-2643-4cd3-8d44-84e05f807f16",
      applicant_name: "Syafiq Basr",
      evaluator_nominated_id: "d43c6c84-ca6b-42a0-9406-6b8f8026ed2c",
      evaluator_nominated_name: "Amin Redzuan",
      applied_house_id: "2c7632e4-38b6-4624-ae27-1ffbaf079161",
      applied_house_assessment_tax_account: "12412412",
      status: "IE",
      date_submitted: "2019-12-15"
    }
    this.router.navigate(['/applications/details'], applicationView)
  }

}
