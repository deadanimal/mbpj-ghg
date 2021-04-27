import { Component, OnInit } from '@angular/core';

import { 
  AbstractControl,
  FormBuilder, 
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';

import { User } from 'src/app/shared/services/users/users.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Data
  public user: User

  // Form
  userForm: FormGroup
  passwordForm: FormGroup
  passwordFormMessage = {
    'new_password1': [
      { type: 'required', message: 'This field is required' },
      { type: 'pattern', message: 'Password must have minimum eight characters, at least one uppercase letter, one lowercase letter and one number' }
    ],
    'new_password2': [
      { type: 'required', message: 'This field is required' }
    ]
  }

  passwordConfirmation(c: AbstractControl): { invalid: boolean } {
    if (c.get('new_password1').value !== c.get('new_password2').value) {
      return { invalid: true };
    }
  }

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private formBuilder: FormBuilder,
    private notifyService: NotifyService,
    private loadingBar: LoadingBarService
  ) { 
    this.getData()
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: new FormControl(''),
      full_name: new FormControl(''),
      new_nric: new FormControl('')
    })
    this.passwordForm = this.formBuilder.group({
      new_password1: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')
      ]
      )),
      new_password2: new FormControl('', Validators.compose([
        Validators.required
      ]))
    },
    {
      validators: this.passwordConfirmation
    })
  }

  getData() {
    this.user = this.authService.userDetail
  }

  updateInformation(){
    this.userForm.value.username = this.user.username
    if (this.userForm.value.full_name == '') {
      this.userForm.value.full_name = this.user.full_name
    }
    else if (this.userForm.value.new_nric == '') {
      this.userForm.value.new_nric = this.user.new_nric
    }

    console.log(this.userForm.value)

    this.loadingBar.start()
    this.userService.update(this.userForm.value, this.user.id).subscribe(
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
      },
      () => {
        // console.log('After')
        this.successMessage('information')
      }
    )
  }

  changePassword() {
    this.loadingBar.start()
    this.authService.changePassword(this.passwordForm.value).subscribe(
      () => {
        // console.log('Accepted')
        this.loadingBar.complete()
        // this.successfulChangePasswordMessage()
      },
      () => {
        // console.log('Denied')
        this.loadingBar.complete()
      },
      () => {
        // console.log('After')
        this.successMessage('password')
      }
    )
  }

  successMessage(type: string) {
    let title = 'Success'
    if (type == 'information') {
      let message = 'Your information has been updated'
      this.notifyService.openToastr(title, message)
    }
    else if (type == 'password') {
      let message = 'Your password has been updated'
      this.notifyService.openToastr(title, message)
    }
  }

}
