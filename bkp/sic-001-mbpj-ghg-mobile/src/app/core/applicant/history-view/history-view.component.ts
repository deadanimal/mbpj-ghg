import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.scss'],
})
export class HistoryViewComponent implements OnInit {

  constructor(
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {}

  async doPrint() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'You\'re about to download this application',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Download',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
