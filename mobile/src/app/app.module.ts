import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { AppComponent } from './app.component';
import { CoreLayoutComponent } from './layouts/core-layout/core-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { JwtService } from './shared/handlers/jwt/jwt.service';
import { AuthService } from './shared/services/auth/auth.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpTokenInterceptor } from './shared/interceptor/http.token.interceptor';
import { Base64 } from '@ionic-native/base64/ngx';
// import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    AppComponent,
    CoreLayoutComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    // IonicStorageModule.forRoot()
  ],
  providers: [
    Base64,
    Camera,
    JwtService,
    NativeStorage,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
