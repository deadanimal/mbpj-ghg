import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/shared/services/auth/auth.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  // Data
  today: Date = new Date();

  // Checker
  isCollapsed = true;

  // Image
  imgLogo = 'assets/img/logo/logo-erebat.png'
  imgEnv = 'assets/img/default/environment.png'
  imgApple = 'assets/img/badge/appstore.svg'
  imgAndroid = 'assets/img/badge/playstore.svg'
  imgSmart = 'assets/img/logo/logo-mbpj.png'
  imgMBPJ = 'assets/img/logo/logo-smart-pj.png'

  // Form
  resetForm: FormGroup

  // Subscriber
  subscription: Subscription

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private loadingBar: LoadingBarService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  initForm() {
    this.resetForm = this.fb.group({

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
      },
      () => {
        
      }
    )
  }

}
