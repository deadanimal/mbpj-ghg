import { Component, OnInit } from "@angular/core";
import { map, tap, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

import { ApplicationsService } from "src/app/shared/services/applications/applications.service";
import { House } from "src/app/shared/services/houses/houses.model";
import { HousesService } from "src/app/shared/services/houses/houses.service";
import { Advertisement } from "src/app/shared/services/advertisement/advertisement.model";
import { AdvertisementService } from "src/app/shared/services/advertisement/advertisement.service";
import { AuthService } from "src/app/shared/services/auth/auth.service";


import { TranslateService } from "@ngx-translate/core";

import * as moment from "moment";
import { Application } from "src/app/shared/services/applications/applications.model";

@Component({
  selector: "app-apply-start",
  templateUrl: "./apply-start.component.html",
  styleUrls: ["./apply-start.component.scss"],
})
export class ApplyStartComponent implements OnInit {
  // Image
  imgApplyBanner = "assets/icon/green-city.svg";
  imgHouseThumbnail = "assets/icon/house.svg";



  // Advertisement
  advertisements : Advertisement[] = [];

  // Check
  isStartApplication: boolean = false;
  isApplicationEnabled: boolean;
  isApplied: boolean = false;

  // Data
  houses: House[];

  // Slider
  slidesOptions = {
    initialSlide: 0,
    speed: 400,
  };

  // Application
  applications: any[] = [];
  isGotApplication: boolean = false;


  constructor(
    public applicationService: ApplicationsService,
    private houseService: HousesService,
    private alertCtrl: AlertController,
    private router: Router,
    public translate: TranslateService,
    private adsService: AdvertisementService,
    private authService: AuthService
  ) {
    this.houses = this.houseService.housesFiltered;
  }

  ngOnInit() {
    this.getAdvertisement();
    this.getApplicationStatus();
    this.getUserHouse();
  }

  getUserHouse() {
    this.houseService.getUser(this.authService.userID).subscribe(
      (res) => {
        this.houses = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }




  selectHouse(house) {
    var app_status = "";
    this.applicationService.checkHouseApplication(house.id).subscribe(
      (res) => {
        console.log(res);
        if (res.status == "DF") {
          app_status = "DF";
          house.application_status = "DF"
          this.router.navigate(["/applicant/apply-form"], house);
        }
      },
      (err) => {
        console.log(err);
      }
    );

    // check house application punya status -> if DF -> redirect ke page rebate terus
    
    
    let body = {
      year: moment().format("YYYY"),
      house: house.id,
      assessment_tax_account: house.assessment_tax_account
    };

    this.applicationService.get_filter_one_application_per_year(body).subscribe(
      async (res) => {
        console.log("filter one application per year response", res);
        if (res > 0) {
          const alert = await this.alertCtrl.create({
            header: this.translate.instant("APPLY.restrictOneHeader"),
            message:
              this.translate.instant("APPLY.restrictOneMessage") +
              house.address +
              ", " +
              house.postcode +
              " " +
              house.area + 
              " or you have applied for same tax number this year " + 
              house.assessment_tax_account,
            buttons: ["OK"],
          });

          if (app_status != "DF") {
            await alert.present();
          }

        } else {
          const alert = await this.alertCtrl.create({
            header: this.translate.instant("APPLY.confirmHeader"),
            message: this.translate.instant("APPLY.confirmMessage"),
            buttons: [
              {
                text: this.translate.instant("APPLY.confirmCancelButton"),
                role: "cancel",
                cssClass: "secondary",
                handler: (blah) => {},
              },
              {
                text: this.translate.instant("APPLY.confirmButton"),
                handler: () => {
                  house.application_status = "NOT DF"
                  this.router.navigate(["/applicant/apply-form"], house);
                },
              },
            ],
          });

          if (app_status != "DF") {
            await alert.present();
          }
        }
      },
      (err) => {
        console.error("err", err);
      }
    );
  }

  startApply() {
    this.isStartApplication = true;
  }

  getAdvertisement() {
    this.adsService.doRetrieveAllAdvertisements().pipe(map(x => x.filter(i => i.status == true))).subscribe(
      (res)=> {
        this.advertisements = res.reverse();
        console.log(this.advertisements);
      },
      ()=> {},
      ()=> {
      }
    );
  }
  
  getApplicationStatus() {
    this.applicationService.get_application_status().subscribe(
      (res) => {
        this.isApplicationEnabled = res['0']['enable_application'];
      },
      (err) => {
      }
    );
  }
  

  /*
  async confirmHouseAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'You can only apply for one house per year. Do you wish to continue?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm, please proceed',
          handler: () => {
            //this.doStartApplication(house)
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }*/
}
