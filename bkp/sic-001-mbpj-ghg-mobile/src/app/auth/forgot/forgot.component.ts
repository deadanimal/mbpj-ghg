import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { LoadingController } from "@ionic/angular";

import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth/auth.service";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";

@Component({
  selector: "app-forgot",
  templateUrl: "./forgot.component.html",
  styleUrls: ["./forgot.component.scss"],
})
export class ForgotComponent implements OnInit {
  // Data
  email: string = "";
  user_type: string = "";

  // Form
  resetForm: FormGroup;
  resetFormMessage = {
    email: [
      { type: "required", message: "Email is required" },
      { type: "email", message: "A valid email is required" },
    ],
    username: [{ type: "required", message: "NRIC / Passport is required" }],
  };

  // Loading
  loadingMessage: HTMLIonLoadingElement;

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user_type =
          this.router.getCurrentNavigation().extras.state.user_type;
      }
    });
  }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.email])
      ),
      username: new FormControl("", Validators.compose([Validators.required])),
    });
  }

  async reset() {
    this.loadingMessage = await this.loadingCtrl.create({
      message: "Loading...",
    });
    await this.loadingMessage.present();

    this.authService
      .filterUser(
        "new_nric=" +
          this.resetForm.value.username +
          "&email=" +
          this.resetForm.value.email +
          "&user_type=" +
          this.user_type
      )
      .subscribe(
        (res) => {
          this.loadingMessage.dismiss();
          // console.log("res", res);
          if (res.length > 0) {
            let navigationExtras: NavigationExtras = {
              state: {
                id: res[0].id,
                username: this.resetForm.value.username,
                email: this.resetForm.value.email,
              },
            };
            this.router.navigate(["auth/change-password"], navigationExtras);
          } else {
            this.unExistingUserError();
          }
        },
        (err) => {
          this.loadingMessage.dismiss();
          // console.error("err", err);
        }
      );
  }

  unExistingUserError() {
    let message =
      "The NRIC or passport/email is not exist. Please contact administrator for further details.";
    this.notifyService.openToastrError(message);
  }
}
