import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import * as moment from 'moment';
import { Application } from 'src/app/shared/services/applications/applications.model';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { EvaluationSchedule } from 'src/app/shared/services/evaluations-schedules/evaluation-schedules.model';
import { SchedulesService } from 'src/app/shared/services/evaluations-schedules/evaluation-schedules.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public folder: string;
  public role: string = ''

  // Checker
  isApplicationEmpty: boolean = true
  isApplicant: boolean = true

  // Data
  applications: Application[] = []
  id_serial = 21412
  created_at = '22/04/2020'
  schedules: EvaluationSchedule[] = []

  // Image
  imgMyHome = 'assets/img/default/house.jpg'
  imgApply = 'assets/img/default/form.jpg'
  imgNotification = 'assets/img/default/notification.jpg'
  imgHistory = 'assets/img/default/bookshelf.jpg'
  iconError = 'assets/img/icon/error-404.svg'

  // Subscription
  subscription

  constructor(
    private platform: Platform,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private applicationService: ApplicationsService,
    private scheduleService: SchedulesService,
    private router: Router
  ) { 
    this.getData()
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(9999,() => {
      // do nothing
    })
  }

  ionViewWillLeave() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getData() {
    if (this.authService.userType == 'AP') {
      this.isApplicant = true
      this.applicationService.getAll().subscribe(
        () => {
          this.applications = this.applicationService.applications
        },
        () => {},
        () => {}
      )
    }
    else if (this.authService.userType == 'EV') {
      this.isApplicant = false
      // this.scheduleService.getAll().subscribe(
      //   () => {
      //     this.schedules = this.scheduleService.schedules
      //   }
      // )
    }
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

  navigateApplication(application: Application) {
    this.router.navigate(['/core/application-detail/', application])
  }

}
