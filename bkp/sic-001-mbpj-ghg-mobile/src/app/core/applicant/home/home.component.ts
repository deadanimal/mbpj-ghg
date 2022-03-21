import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

import { Application } from "src/app/shared/services/applications/applications.model";
import { ApplicationsService } from "src/app/shared/services/applications/applications.service";
import { AuthService } from "src/app/shared/services/auth/auth.service";
import { HousesService } from "src/app/shared/services/houses/houses.service";
import { House } from "src/app/shared/services/houses/houses.model";

import * as moment from "moment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  // Check
  isGotApplication: boolean = false;

  // Image
  imgNotFound = "assets/icon/error-404.svg";

  // Data
  applications: any[] = [];
  houses: House[] = [];

  constructor(
    private authService: AuthService,
    private applicationService: ApplicationsService,
    private alertCtrl: AlertController,
    private housesService: HousesService,
    private router: Router
  ) {}

  ngOnInit() {

    this.getHouseData();
  }

  ionViewDidEnter() {
    // console.log("ionViewDidEnter HomeComponent");
    // this.applications = this.applicationService.retrievedApplicantCurrentApplications
    this.applicationService
      .getApplicant(this.authService.userID)
      .subscribe((res) => {
        this.applications = res;
        
        console.log("this.applications", this.applications);
        if (this.applications.length > 0) this.isGotApplication = true;

        this.applications.forEach((application) => {
         
          let house = this.houses.find(house => house.id === application.applied_house);

          application.tax_number = house.assessment_tax_account
          application.address = house.address

          application.date_submitted = moment(
            application.date_submitted,
            "YYYY-MM-DD"
          ).format("DD-MM-YYYY");
        });
      });
    this.applications.forEach((application) => {
      application.date_submitted = moment(
        application.date_submitted,
        "YYYY-MM-DD"
      ).format("DD-MM-YYYY");
    });
    this.doCheckUserDetail();
  }

  doCheckUserDetail() {
    if (
      !this.authService.userSelfDetail.full_name ||
      !this.authService.userSelfDetail.email ||
      !this.authService.userSelfDetail.new_nric ||
      !this.authService.userSelfDetail.phone
    ) {
      this.alertDetailsIncomplete();
    } else {
      console.log("You are alright");
    }
  }

  async alertDetailsIncomplete() {
    const alert = await this.alertCtrl.create({
      header: "Profile",
      message:
        "It seems like your profile is incomplete. Please complete your profile details.",
      backdropDismiss: false,
      buttons: [
        {
          text: "Edit profile",
          handler: () => {
            console.log("Going to edit");
            this.router.navigate(["applicant/profile"]);
          },
        },
      ],
    });
    await alert.present();
  }

  getHouseData() {
    this.housesService.get().subscribe(
      (res) => {
        this.houses = res;
      },
      (err) => {

      },
    );
  }
}
