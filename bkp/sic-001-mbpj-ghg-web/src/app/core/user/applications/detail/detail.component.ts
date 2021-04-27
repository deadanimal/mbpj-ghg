/**
 * ------- Tile layer list
 *  
 * Open Street Map - > http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
 * Open Cycle Map -> http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png
 * Google Traffic -> https://{s}.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}
 * Google Street -> http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}
 * Google Hybrid -> http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}
 * Google Satellite -> http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}
 * Google Terrain -> http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}
 * 
**/

import { Component, OnInit, TemplateRef, NgZone } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Application } from 'src/app/shared/services/applications/applications.model';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { User } from 'src/app/shared/services/auth/auth.model';
import { House } from 'src/app/shared/services/houses/houses.model';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ApplicationAssessment } from 'src/app/shared/services/application-assessments/application-assessments.model';
import { ApplicationAssessmentsService } from 'src/app/shared/services/application-assessments/application-assessments.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/shared/services/users/users.service';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public tempApplication
  public tempApplicant: User
  public tempEvaluator: User[] = []
  public tempHouse: House
  public tempAssessment: ApplicationAssessment[] = []
  public pieChart
  focus
  evaluatorForm = new FormGroup({
    evaluator_nominated: new FormControl('')
  })

  options = {
    layers: [
      L.tileLayer(
        'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        {
          maxZoom: 20,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        }
      )
    ],
    zoom: 18,
    center: L.latLng(3.165136, 101.609753)
  };

  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  motorcycle

  constructor(
    public router: Router,
    private modalService: BsModalService,
    private authService: AuthService,
    private userService: UsersService,
    private houseService: HousesService,
    private applicationAssessmentService: ApplicationAssessmentsService,
    private applicationService: ApplicationsService,
    public toastr: ToastrService,
    public zone: NgZone
  ) {
    this.tempApplication = this.router.getCurrentNavigation().extras
    console.log(this.tempApplication)
  }

  ngOnInit() {
    console.log('Loaded detail', this.tempApplication)
    this.userService.users.forEach(
      (data) => {
        if (data.id == this.tempApplication.applicant) {
          this.tempApplicant = data
          console.log(this.tempApplicant)
        }
        if (data.user_type == 'EV') {
          this.tempEvaluator.push(data)
        }
      }
    )
    this.houseService.retrievedHouses.forEach(
      (data) => {
        if (data.id == this.tempApplication.applied_house) {
          this.tempHouse = data
          console.log(this.tempHouse)
        }
      }
    )
    this.applicationAssessmentService.retrievedApplicationAssessments.forEach(
      (data) => {
        if (data.application == this.tempApplication.id) {
          this.tempAssessment.push(data)
          console.log(this.tempAssessment)
        }
      }
    )

    console.log('Applicant', this.tempApplicant)
    console.log('Application', this.tempApplication)
    console.log('House', this.tempHouse)
    this.initChart()
  }

  doOpenModal(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }

  doAssignEvaluator() {
    console.log(this.evaluatorForm)
    this.applicationService.doAssignEvaluator(this.evaluatorForm.value, this.tempApplication.id).subscribe(
      () => {
        this.successfulToastr()
      },
      () => {
        this.unsuccessfulToastr()
      }
    )
  }

  successfulToastr() {
    this.toastr.show(
      '<span class="alert-icon fas fa-check-circle" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Success</span> <span data-notify="message">Evaluator is registered</span></div>',
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

  unsuccessfulToastr() {
    this.toastr.show(
      '<span class="alert-icon fas fa-exclamation-triangle"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Warning</span> <span data-notify="message">Please try again</span></div>',
      '',
      {
        timeOut: 2000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: false,
        titleClass: 'alert-title',
        positionClass: 'toast-top-right',
        toastClass: "ngx-toastr alert alert-dismissible alert-danger alert-notify",
      }
    );
  }

  doApproveRebate() {
    this.toastr.show(
      '<span class="alert-icon fas fa-check-circle" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Success</span> <span data-notify="message">Notification has been sent to the applicant</span></div>',
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
    this.defaultModal.hide()
  }

  doExport() {
    console.log('masuk')
    this.toastr.show(
      '<span class="alert-icon fas fa-check-circle" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Exporting</span> <span data-notify="message">Your download will begin shortly</span></div>',
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

  initChart() {
    this.zone.runOutsideAngular(() => {
      this.pieChart = am4core.create("chartdiv", am4charts.PieChart);

      // Add data
      this.pieChart.data = [
        {
          "category": "Electricity",
          "value": 23.9
        },
        {
          "category": "Water",
          "value": 31.9
        },
        {
          "category": "Transportation",
          "value": 11.1
        }
      ];

      // Add and configure Series
      let pieSeries = this.pieChart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "value";
      pieSeries.dataFields.category = "category";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
    })
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.pieChart) {
        this.pieChart.dispose()
      }
    })
  }

}
