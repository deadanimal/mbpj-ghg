import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule, CollapseModule, ProgressbarModule, TabsModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { PublicRoutes } from './public.routing';
import { HomeComponent } from './home/home.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

@NgModule({
  declarations: [
    HomeComponent, 
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    RouterModule.forChild(PublicRoutes)
  ]
})
export class PublicModule { }
