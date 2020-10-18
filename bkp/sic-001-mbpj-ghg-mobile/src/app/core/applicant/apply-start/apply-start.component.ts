import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { AlertController } from '@ionic/angular';
import { House } from 'src/app/shared/services/houses/houses.model';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-apply-start',
  templateUrl: './apply-start.component.html',
  styleUrls: ['./apply-start.component.scss'],
})
export class ApplyStartComponent implements OnInit {

  // Image
  imgApplyBanner = 'assets/icon/green-city.svg'
  imgHouseThumbnail = 'assets/icon/house.svg'
  
  // Check
  isStartApplication: boolean = false
  isApplied: boolean = false

  // Data
  houses: House[]

  // Slider
  slidesOptions = {
    initialSlide: 0,
    speed: 400
  }

  constructor(
    private houseService: HousesService,
    private alertCtrl: AlertController,
    private router: Router,
    public translate: TranslateService
  ) { 
    this.houses = this.houseService.housesFiltered
  }

  ngOnInit() {
    // console.log(this.houses)
  }

  async selectHouse(house) {
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('APPLY.confirmHeader'),
      message: this.translate.instant('APPLY.confirmMessage'),
      buttons: [
        {
          text: this.translate.instant('APPLY.confirmCancelButton'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: this.translate.instant('APPLY.confirmButton'),
          handler: () => {
            console.log('house: ',house)
            this.router.navigate(['/applicant/apply-form'], house)
          }
        }
      ]
    })

    await alert.present();
  }

  startApply() {
    this.isStartApplication = true
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
