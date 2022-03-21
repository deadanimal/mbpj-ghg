import { Component, OnInit, TemplateRef, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { ToastrService } from "ngx-toastr";

import { Application } from "src/app/shared/services/applications/applications.model";
import { User } from "src/app/shared/services/auth/auth.model";

import { AuthService } from "src/app/shared/services/auth/auth.service";
import { ApplicationsService } from "src/app/shared/services/applications/applications.service";
import { RebatesService } from "src/app/shared/services/rebates/rebates.service";
import { UsersService } from "src/app/shared/services/users/users.service";
import { HousesService } from "src/app/shared/services/houses/houses.service";
import { House } from "src/app/shared/services/houses/houses.model";


import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

import * as moment from "moment";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  // Data
  totalApplicants: number = 0;
  totalApplications: number = 0;
  totalApplicationsSince2011: number = 0;
  totalApprovedRebates: number = 0;
  totalApprovedRebatesSince2011: number = 0;
  totalApprovedApplications: number = 0;
  totalApprovedApplicationsSince2011: number = 0;
  houses: House[] = [];

  dataElectricity: number = 0;
  dataTransportation: number = 0;
  dataWater: number = 0;

  latestApplications: Application[] = [];
  latestApplicationsEdited: []= [];
  latestRegisteredApplicants: User[] = [];
  latestEvaluatedApplications: Application[] = [];

  selectedUser: User;

  yearAverageCarbonEmission: string = new Date().getFullYear().toString();

  // Chart
  chartCarbon: am4charts.XYChart3D;

  // Dropdown
  year2011tocurrentyear = [];

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  constructor(
    private authService: AuthService,
    private applicationService: ApplicationsService,
    private rebateService: RebatesService,
    private userService: UsersService,

    public router: Router,
    private modalService: BsModalService,
    public toastr: ToastrService,
    private zone: NgZone,
    private housesService: HousesService
  ) {
    // loop through data from 2011 to 2021
    let currentyear = new Date().getFullYear();
    let loop = currentyear - 2011;
    for (let i = 0; i < loop + 1; i++) {
      let obj = {
        value: 2011 + i,
        display_name: (2011 + i).toString(),
      };
      this.year2011tocurrentyear.push(obj);
    }
  }

  ngOnInit() {
    this.initThings();
    this.retrieveLatestRegistration();
    this.retrieveLatestApplication();
    this.retrieveLatestEvaluated();
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.findCarbon();
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chartCarbon) {
        this.chartCarbon.dispose();
      }
    });
  }

  retrieveLatestApplication() {
    this.housesService.getAll().subscribe(
      (res) => {
        this.houses = res;
        let filterUrl: string = "status=CR";
        let tempApplication;
        this.applicationService.retrieveFilteredApplications(filterUrl).subscribe(
          (res) => {
            
            console.log("retrieveLatestApplication", res);
            tempApplication = res;
          },
          () => {},
          () => {
            let counter = 0;
            tempApplication.forEach((application) => {
              application.date_submitted = moment(
                application.date_submitted
              ).format("DD-MM-YYYY");
              if (this.latestApplications.length < 5) {
                //TODO
                console.log("app", application);
                application.tax_number = this.houses.find((obj)=> obj.id == application.applied_house).assessment_tax_account;
                this.latestApplications.push(application);
              }
            });
            // console.log('latest app: ', this.latestApplications)
          }
        );
      },
      (err) => {

      }
    );
    
  }

  retrieveLatestRegistration() {
    let filterUrl: string = "user_type=AP";
    let tempApplicant;
    this.userService.filter(filterUrl).subscribe(
      (res) => {
        tempApplicant = res;
      },
      () => {},
      () => {
        let counter = 0;
        tempApplicant.forEach((applicant: User) => {
          applicant.date_joined = moment(applicant.date_joined).format(
            "DD-MM-YYYY"
          );
          if (this.latestRegisteredApplicants.length < 5) {
            this.latestRegisteredApplicants.push(applicant);
          }
        });
        // console.log('registered app: ', this.latestRegisteredApplicants)
      }
    );
  }

  retrieveLatestEvaluated() {
    

    this.housesService.getAll().subscribe(
      (res) => {
        this.houses = res;
        let filterUrl: string = "status=CR";
        let tempApplication;
        this.applicationService.retrieveFilteredApplications(filterUrl).subscribe(
          (res) => {
            tempApplication = res;
            console.log("tempApplication", tempApplication)
          },
          () => {},
          () => {
            let counter = 0;
            tempApplication.forEach((application) => {
              let a = this.houses.find((obj)=> obj.id == application.applied_house);
              application.date_submitted = moment(
                application.date_submitted
              ).format("DD-MM-YYYY");
              application.tax_number = a.assessment_tax_account;
              if (this.latestEvaluatedApplications.length < 5) {
                this.latestEvaluatedApplications.push(application);
              }
            });
            // console.log('evaluated app: ', this.latestApplications)
          }
        );
      },
      (err) => {},
      ()=> {}
    );
    
  }

  

  openModal(modalRef: TemplateRef<any>, user) {
    this.selectedUser = user;
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    if (this.selectedUser) {
      delete this.selectedUser;
    }
    this.modal.hide();
  }

  findCarbon() {
    if (this.chartCarbon) this.chartCarbon.dispose();
    let body = {
      year: this.yearAverageCarbonEmission,
    };
    this.applicationService.doRetrieveAverageCarbonEmission(body).subscribe(
      (res) => {
        // console.log("res", res);
        this.initCarbon(res);
      },
      (err) => {
        console.error("err", err);
      }
    );
  }

  initCarbon(chartData) {
    let chart = am4core.create("chartdiv", am4charts.XYChart3D);

    chart.data = chartData;

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
    valueAxis.min = 0;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "usage";
    series.name = "Type";
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color("#FFFFFF");

    columnTemplate.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineY.strokeOpacity = 0;

    chart.exporting.menu = new am4core.ExportMenu();
    chart.exporting.menu.align = "right";
    chart.exporting.menu.verticalAlign = "top";
    chart.exporting.filePrefix =
      "Average_Carbon_Emission_" + moment().format("YYYY-MM-DD_hh_mm_ss");

    this.chartCarbon = chart;
  }

  initThings() {
    let tempUsers = [];
    let tempApprovedApplications = [];
    this.authService.retrievedUsers.forEach((data) => {
      if (data.user_type == "AP") {
        tempUsers.push(data);
      }
    });
    this.applicationService.retrievedApplications.forEach((data) => {
      if (data.status == "AP") {
        tempApprovedApplications.push(data);
      }
    });

    this.totalApplicants = tempUsers.length;

    this.applicationService
      .doRetrieveTotalAppReceivedSince2011()
      .subscribe((res) => {
        this.totalApplicationsSince2011 = res ? res : 0;
      });

    this.applicationService
      .doRetrieveTotalAppReceivedCurrentYear()
      .subscribe((res) => {
        this.totalApplications = res ? res : 0;
      });

    this.applicationService
      .doRetrieveTotalAppApprovedSince2011()
      .subscribe((res) => {
        this.totalApprovedApplicationsSince2011 = res ? res : 0;
      });

    this.applicationService
      .doRetrieveTotalAppApprovedCurrentYear()
      .subscribe((res) => {
        this.totalApprovedApplications = res ? res : 0;
      });

    this.rebateService
      .doRetrieveTotalRebateAwardedSince2011()
      .subscribe((res) => {
        this.totalApprovedRebatesSince2011 = res.amount_approved__sum
          ? res.amount_approved__sum
          : 0;
      });

    this.rebateService
      .doRetrieveTotalRebateAwardedCurrentYear()
      .subscribe((res) => {
        this.totalApprovedRebates = res.amount_approved__sum
          ? res.amount_approved__sum
          : 0;
      });
  }

  doApproveUser() {
    this.modal.hide();
    this.toastr.show(
      '<span class="alert-icon fas fa-check-circle" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Success</span> <span data-notify="message">You have succesfully approve a user</span></div>',
      "",
      {
        timeOut: 2000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: false,
        titleClass: "alert-title",
        positionClass: "toast-top-right",
        toastClass:
          "ngx-toastr alert alert-dismissible alert-success alert-notify",
      }
    );
  }

  viewApplication(selectedApplication) {
    // this.router.navigate(["/applications/details"], selectedApplication);
    this.router.navigate(["/applications/details"], {
      queryParams: { application_id: selectedApplication.id },
    });
  }
}
