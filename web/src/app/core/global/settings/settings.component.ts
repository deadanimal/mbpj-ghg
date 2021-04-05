import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Subscription } from 'rxjs';
import { JwtService } from 'src/app/shared/handler/jwt/jwt.service';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { User } from 'src/app/shared/services/users/users.model';
import { UsersService } from 'src/app/shared/services/users/users.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  // Data
  user: User

  // Form
  passwordForm: FormGroup
  resetForm: FormGroup

  // Subscriber
  subscription: Subscription

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private fb: FormBuilder,
    private jwtService: JwtService,
    private loadingBar: LoadingBarService,
    private notify: NotifyService
  ) { 
    this.getData()
  }

  ngOnInit() {
    this.initForm()
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  getData() {
    const token = this.jwtService.getToken('accessToken');

    if (token) {
      this.loadingBar.start()
      this.subscription = this.userService.getSelf().subscribe(
        () => {
          this.loadingBar.complete()
        },
        () => {
          this.loadingBar.complete()
        },
        () => {
          this.user = this.userService.self
        }
      )
    }
  }

  initForm() {
    this.passwordForm = this.fb.group({
      new_password1: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      new_password2: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })

    this.resetForm = this.fb.group({
      email: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })
  }

  confirm(type: string) {

  }

  changePassword() {
    this.loadingBar.start()
    this.subscription = this.authService.changePassword(this.passwordForm.value).subscribe(
      () => {
        this.loadingBar.start()
      },
      () => {
        this.loadingBar.start()
      },
      () => {}
    )
  }

  reset() {
    this.loadingBar.start()
    this.subscription = this.authService.resetPassword(this.resetForm.value).subscribe(
      () => {
        this.loadingBar.start()
      },
      () => {
        this.loadingBar.start()
      },
      () => {}
    )
  }

}
