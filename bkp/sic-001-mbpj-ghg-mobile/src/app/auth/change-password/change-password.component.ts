import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { LoadingController, NavController } from "@ionic/angular";

import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth/auth.service";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent implements OnInit {
  // Data
  email: string = "";
  user_id: string = "";
  user_username: string = "";
  user_email: string = "";

  // Form
  changePasswordForm: FormGroup;
  changePasswordFormMessage = {
    password: [
      { type: "required", message: "Password is required" },
      { type: "minLength", message: "Password is too short" },
    ],
  };

  // Loading
  loadingMessage: HTMLIonLoadingElement;

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user_id = this.router.getCurrentNavigation().extras.state.id;
        this.user_username =
          this.router.getCurrentNavigation().extras.state.username;
        this.user_email = this.router.getCurrentNavigation().extras.state.email;
      }
    });
  }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      password1: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(8)])
      ),
      password2: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(8)])
      ),
    });
  }

  async changePassword() {
    this.loadingMessage = await this.loadingCtrl.create({
      message: "Loading...",
    });
    await this.loadingMessage.present();

    if (
      this.changePasswordForm.value.password1 !=
      this.changePasswordForm.value.password2
    ) {
      this.passwordError();
      this.loadingMessage.dismiss();
    } else {
      // change password here

      this.authService
        .changePasswordUser(this.changePasswordForm.value, this.user_id)
        .subscribe(
          (res) => {
            this.loadingMessage.dismiss();
            // console.log("res", res);
            if (res) {
              this.successMessage();
              this.navCtrl.back();
            }
          },
          (err) => {
            this.loadingMessage.dismiss();
            // console.error("err", err);
          }
        );
    }
  }

  successMessage() {
    let message =
      "Change password successful, please login with a new password";
    this.notifyService.openToastr(message);
  }

  passwordError() {
    let message = "Password and confirm password do not match";
    this.notifyService.openToastrError(message);
  }
}
