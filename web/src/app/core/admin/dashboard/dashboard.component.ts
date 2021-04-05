import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';

import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { EvaluationsService } from 'src/app/shared/services/evaluations/evaluations.service';
import { RebatesService } from 'src/app/shared/services/rebates/rebates.service';
import { Application, ApplicationExtended } from 'src/app/shared/services/applications/applications.model';
import { Evaluation, EvaluationExtended } from 'src/app/shared/services/evaluations/evaluations.model';
import { Rebate, RebateExtended } from 'src/app/shared/services/rebates/rebates.model';

import * as moment from 'moment';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { LoadingBarService } from "@ngx-loading-bar/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  // Data
  applications: ApplicationExtended[] = []
  evaluations: EvaluationExtended[] = []
  rebates: RebateExtended[] = []
  
  // Stats
  totalApplicationApproved: number = 0
  totalApplicationApprovedCurrent: number = 0
  totalRebateRewarded: number = 0
  totalRebateRewardedCurrent: number = 0
  totalApplicationReceived: number = 0
  totalApplicationReceivedCurrent: number = 0

  // Chart
  private chart: any
  private chart1: any
  private chart2: any
  private clicked: any = true
  private clicked1: any = false

  // Checker
  isApplicationEmpty: boolean = true
  isEvaluationEmpty: boolean = true
  isRebateEmpty: boolean = true

  // Icon
  iconEmpty = 'assets/img/icons/box.svg'

  // Subscriber
  subscription: Subscription

  constructor(
    private authService: AuthService,
    private applicationService: ApplicationsService,
    private evaluationService: EvaluationsService,
    private rebateService: RebatesService,
    private loadingBar: LoadingBarService,
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.getData()
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
    
    this.zone.runOutsideAngular(
      () => {
        if (this.chart) {
          console.log('Chart disposed')
          this.chart.dispose()
        }
        if (this.chart1) {
          console.log('Chart disposed')
          this.chart1.dispose()
        }
      }
    )
  }

  getData() {
    this.loadingBar.start()

    this.subscription = forkJoin([
      this.applicationService.getAll(),
      this.evaluationService.getAll(),
      this.rebateService.getAll(),
      this.applicationService.getStatistics()
    ]).subscribe(
      (res) => {
        this.loadingBar.complete()
      },
      (err) => {
        this.loadingBar.complete()
      },
      () => {
        this.filterData()
      }
    )
  }

  filterData() {
    let tempApplications = this.applicationService.applications
    let tempEvaluations = this.evaluationService.evaluations
    let tempRebates = this.rebateService.rebates

    if (this.applicationService.statistics) {
      this.totalApplicationApproved = this.applicationService.statistics['statistics']['application_approved']
      this.totalApplicationApprovedCurrent = this.applicationService.statistics['statistics']['application_approved_current']
      this.totalRebateRewarded = this.applicationService.statistics['statistics']['rebate_awarded']
      this.totalRebateRewardedCurrent = this.applicationService.statistics['statistics']['rebate_awarded_current']
      this.totalApplicationReceived = this.applicationService.statistics['statistics']['application_received']
      this.totalApplicationReceivedCurrent = this.applicationService.statistics['statistics']['application_received_current']
    }

    tempApplications.forEach(
      (application: ApplicationExtended) => {
        if (this.applications.length < 5) {
          this.applications.push(application)
        }
        
        if (this.applications.length > 0) {
          this.isApplicationEmpty = false
        }
      }
    )

    tempEvaluations.forEach(
      (evaluation: EvaluationExtended) => {
        if (this.evaluations.length < 5) {
          this.evaluations.push(evaluation)
        }

        if (this.evaluations.length > 0) {
          this.isEvaluationEmpty = false
        }
      }
    )

    tempRebates.forEach(
      (rebate: RebateExtended) => {
        if (this.rebates.length < 5) {
          this.rebates.push(rebate)
        }

        if (this.rebates.length > 0) {
          this.isRebateEmpty = false
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart()
      this.getChart1()
    })
  }

  getChart() {
  }

  getChart1() {
  }

  view(selected) {
    let path = '/admin/applications/detail'
    let extras = selected['id']
    let queryParams = {
      queryParams: {
        id: extras
      }
    }

    return this.router.navigate([path], queryParams)
  }

}
