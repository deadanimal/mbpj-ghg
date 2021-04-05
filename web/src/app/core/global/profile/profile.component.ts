import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { JwtService } from 'src/app/shared/handler/jwt/jwt.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/services/users/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Data
  user: User

  // Toggle
  editEnabled: boolean = false

  // Form
  editForm: FormGroup
  editFormMessages = {
    'name': [
      { type: 'required', message: 'Name is required' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'A valid email is required' }
    ]
  }

  //  Subscriber
  subscription: Subscription

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private jwtService: JwtService,
    private loadingBar: LoadingBarService,
    private router: Router
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

  initForm() {
    this.editForm = this.formBuilder.group({
      full_name: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email
      ])),
      mobile: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      phone: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })
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
          this.editForm.controls['full_name'].setValue(this.user['full_name'])
          this.editForm.controls['email'].setValue(this.user['email'])
          this.editForm.controls['phone'].setValue(this.user['phone'])
          this.editForm.controls['mobile'].setValue(this.user['mobile'])

          this.editForm.controls['full_name'].disable()
          this.editForm.controls['email'].disable()
          this.editForm.controls['phone'].disable()
          this.editForm.controls['mobile'].disable()
        }
      )
    }
  }

  toggleEdit() {
    if (this.editEnabled) {
      this.editEnabled = !this.editEnabled
      this.editForm.disable()
      this.editForm.controls['email'].disable()
    }
    else {
      this.editEnabled = !this.editEnabled
      this.editForm.enable()
      this.editForm.controls['email'].disable()
    }
    
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to save this edit?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.edit()
      }
    })
  }

  edit() {
    this.loadingBar.start()
    this.subscription = this.userService.patch(this.user['id'], this.editForm.value).subscribe(
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
      },
      () => {
        swal.fire({
          title: "Success",
          text: "Update has been saved",
          type: "success",
          buttonsStyling: false,
          confirmButtonClass: "btn btn-success",
          confirmButtonText: "Close"
        }).then((result) => {
          if (result.value) {
            this.editForm.reset()
          }
        })
      }
    )
  }

  navigatePage(path: string) {
    return this.router.navigate([path])
  }

}
