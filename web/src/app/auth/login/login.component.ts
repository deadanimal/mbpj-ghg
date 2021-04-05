import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import { forkJoin, Subscription } from 'rxjs';
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

  // Subscriber
  subscription: Subscription

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private fb: FormBuilder,
    private loadingBar: LoadingBarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm()
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    })
  }

  login() {
    this.loadingBar.start()
    this.authService.obtainToken(this.loginForm.value).subscribe(
      () => {
        this.loadingBar.complete()
      },
      () => { 
        this.loadingBar.complete()
      },
      () => {
        this.authService.userRole = 1
        this.getData()
      }
    )
  }

  submitEnter(event) {
    if (
      event.keyCode === 13 &&
      this.loginForm.valid
    ) {
      this.login()
    }
    else {
      // console.log('Nothing bro')
    }
  }

  getData() {
    this.subscription = forkJoin([
      this.authService.getUserDetail()
    ]).subscribe(
      (res) => {
        this.loadingBar.complete()
      },
      (err) => {
        this.loadingBar.complete()
        let titleError = 'Error'
        let messageError = 'Please try again'
        this.notifyService.openToastrWarning(titleError, messageError)
      },
      () => {
        let titleSuccess = 'Success'
        let messageSuccess = 'Logging in right now'
        this.notifyService.openToastrSuccess(titleSuccess, messageSuccess)
        this.navigatePage('dashboard-admin')
      }
    )
  }

  navigatePage(path: string) {
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

  cheat() {
    let uname = 'syafiqbasri@pipeline.com.my'
    let pwd = 'PabloEscobar'

    this.loginForm.controls['username'].patchValue(uname)
    this.loginForm.controls['password'].patchValue(pwd)

    this.login()
  }

}
