import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './shared/interceptor/http.token.interceptor';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TagInputModule } from 'ngx-chips';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PresentationModule } from './examples/presentation/presentation.module';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000,
      progressBar: true,
      positionClass: 'toast-top-right'
    }),
    CollapseModule.forRoot(),
    TagInputModule,
    PresentationModule,
    LeafletModule.forRoot(),
    NgxSpinnerModule
  ],
  declarations: [
    AppComponent, 
    AdminLayoutComponent, 
    AuthLayoutComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
