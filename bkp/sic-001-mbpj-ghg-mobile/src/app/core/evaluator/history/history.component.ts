import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { Application } from 'src/app/shared/services/applications/applications.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
//import { ApplicationEvaluationsService } from 'src/app/shared/services/application-evaluations/application-evaluations.service';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
//import { ApplicationEvaluationSchedulesService } from 'src/app/shared/services/application-evaluation-schedules/application-evaluation-schedules.service';
import { House } from 'src/app/shared/services/houses/houses.model';
import { User } from 'src/app/shared/services/auth/auth.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  public isGotHistory: boolean = true
  public imgNotFound = 'assets/icon/error-404.svg'
  public imgHistoryThumbnail = 'assets/icon/results.svg'

  public evaluatedApplications: Application[] = []
  public loadedNominatedHouses: House[] = []
  public loadedNominatedApplicant: User[] = []

  constructor(
    private applicationService: ApplicationsService,
    //private applicationEvaluationService: ApplicationEvaluationsService,
    //private applicationEvaluationScheduleService: ApplicationEvaluationSchedulesService,
    private houseService: HousesService,
    private authService: AuthService,
    public alertController: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
    this.initData()
  }

  ionViewDidEnter() {
    this.initData()
  }

  initData() {
   // this.evaluatedApplications = this.applicationService.retrievedNominated
    if (this.evaluatedApplications.length != 0) {
      this.isGotHistory = true
    }
    this.evaluatedApplications.forEach(
      (application) => {
        this.houseService.houses.forEach(
          (house) => {
            if(application.applied_house == house.id){
              this.loadedNominatedHouses.push(house)
              console.log('tepi tepi:', this.loadedNominatedHouses)
            }
          }
        )
        this.authService.users.forEach(
          (applicant) => {
            if (applicant.id == application.applicant){
              this.loadedNominatedApplicant.push(applicant)
            }
          }
        )
      }
    )
  }

  async doConfirmLogout() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.router.navigate(['/auth/login'])
          }
        }
      ]
    });

    await alert.present();
  }


}
