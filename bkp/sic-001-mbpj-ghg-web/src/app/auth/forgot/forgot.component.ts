import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  
  // Form
  focusEmail
  resetForm: FormGroup
  resetFormMessage = {
    'email': [
      { type: 'email', message: 'A valid email is required' },
      { type: 'required', message: 'Email is required'}
    ]
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private loadingBar: LoadingBarService,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.email,
        Validators.required
      ]))
    })
  }

  reset(){
    this.loadingBar.start()
    this.authService.resetPassword(this.resetForm.value).subscribe(
      () => {
        // Success
        this.loadingBar.complete()
      },
      () => {
        // Rejected
        this.loadingBar.complete()
      }, 
      () => {
        // After
        this.resetForm.reset()
        this.successMessage()
      }
    )
  }

  successMessage() {
    let title = 'Success'
    let message = 'A reset link has been sent to your email'
    this.notifyService.openToastr(title, message)
  }

}
