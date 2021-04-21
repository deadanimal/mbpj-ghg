import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { AuthService } from '../../services/auth/auth.service';
import { isDevMode } from '@angular/core';

@Injectable()
export class JwtService {

  constructor(
    private storage: NativeStorage
  ) {}

  getToken(title: string) {
    let go = null
    console.log(isDevMode())
    if (isDevMode()) {
      go = window.localStorage[title]
    }
    else {
      go = this.storage.getItem(title)
    }
    // return window.localStorage[title];
    return go;
  }

  saveToken(title: string, token: string) {
    console.log(isDevMode())
    if (isDevMode()) {
      window.localStorage[title] = token;
    }
    else {
      this.storage.setItem(title, token).then(
        (data) => {},
        (err) => {}
      )
    }
  }

  destroyToken() {
    if (isDevMode()) {
      window.localStorage.clear()
    }
    else {
      this.storage.clear()
    }
  }

  /*
  getTokenDebug() { // debuging purposes
    return this.authService.tokenAccess
  }
  */

  /*

  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

  */

}