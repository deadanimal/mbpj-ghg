import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  // Image
  imgLogo = 'assets/img/logo/mbpj-logo.png'

  // Form
  focusEmail
  resetForm: FormGroup
  resetFormMessages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email'}
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
    this.resetForm = this.fb.group({
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email
      ]))
    })
  }

  reset() {
    this.loadingBar.start()
    this.subscription = this.authService.resetPassword(this.resetForm.value).subscribe(
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
        let titleError = 'Error'
        let messageError = 'Please try again'
        this.notifyService.openToastrWarning(titleError, messageError)
      },
      () => {
        let titleSuccess = 'Success'
        let messageSuccess = 'A reset link has been sent to your email'
        this.notifyService.openToastrSuccess(titleSuccess, messageSuccess)
      }
    )
  }

  navigatePage(path: String) {
    if (path == 'login') {
      return this.router.navigate(['/auth/login'])
    }
  }

}
