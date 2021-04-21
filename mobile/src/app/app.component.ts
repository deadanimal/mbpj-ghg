import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { JwtService } from './shared/handlers/jwt/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private jwt: JwtService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.jwt.getToken('accessToken')
        .then(
          (data) => {
            // console.log('Data: ', data)
          },
          (err) => {
            // console.log('Error: ', err)
            if (err['code'] == 2) {
              this.jwt.saveToken('accessToken', null)
            }
          }
        )
    });
  }

  ngOnInit() {
    /*
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    */
  }
}
