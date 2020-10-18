import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import { forkJoin } from 'rxjs';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { AspectsService } from 'src/app/shared/services/aspects/aspects.service';
import { AssessmentsService } from 'src/app/shared/services/assessments/assessments.service';
import { EvaluationsService } from 'src/app/shared/services/evaluations/evaluations.service';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { RebatesService } from 'src/app/shared/services/rebates/rebates.service';
import { SchedulesService } from 'src/app/shared/services/schedules/schedules.service';
import { TicketsService } from 'src/app/shared/services/tickets/tickets.service';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Image
  imgLogo = 'assets/img/logo/mbpj-logo.png'

  // Form
  focusUsername
  focusPassword
  loginForm: FormGroup
  loginFormMessages = {
    'username': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email'}
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minLength', message: 'Password must have at least 8 characters' }
    ]
  }

  constructor(
    private authService: AuthService,
    private applicationService: ApplicationsService,
    private aspectService: AspectsService,
    private assessmentService: AssessmentsService,
    private evaluationService: EvaluationsService,
    private houseService: HousesService,
    private rebateService: RebatesService,
    private scheduleService: SchedulesService,
    private ticketService: TicketsService,
    private userService: UsersService,
    private notifyService: NotifyService,
    private formBuilder: FormBuilder,
    private loadingBar: LoadingBarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    })
  }

  login() {
    this.loadingBar.start()
    this.authService.obtainToken(this.loginForm.value).subscribe(
      () => {},
      () => { 
        this.loadingBar.complete()
      },
      () => {
        this.authService.userRole = 1
        this.getData()
      }
    )
  }

  getData() {
    forkJoin(
      this.authService.getUserDetail(),
      this.applicationService.getAll(),
      this.aspectService.getAll(),
      this.assessmentService.getAll(),
      this.evaluationService.getAll(),
      this.houseService.getAll(),
      this.rebateService.getAll(),
      this.scheduleService.getAll(),
      // this.ticketService.getAll(),
      this.userService.getAll()
    ).subscribe(
      (res) => {
        this.loadingBar.complete()
      },
      (err) => {
        this.loadingBar.complete()
      },
      () => {
        this.successMessage()
        this.navigatePage('dashboard-admin')
      }
    )
  }

  navigatePage(path: String) {
    if (path == 'login') {
      return this.router.navigate(['/auth/login'])
    }
    else  if (path == 'forgot') {
      return this.router.navigate(['/auth/forgot'])
    }
    else if (path == 'dashboard-admin') {
      return this.router.navigate(['/admin/dashboard'])
    }
  }

  successMessage() {
    let title = 'Success'
    let message = 'Logging in right now'
    this.notifyService.openToastr(title, message)
  }

}
