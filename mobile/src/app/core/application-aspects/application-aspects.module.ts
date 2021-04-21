import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationAspectsPageRoutingModule } from './application-aspects-routing.module';

import { ApplicationAspectsPage } from './application-aspects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationAspectsPageRoutingModule
  ],
  declarations: [ApplicationAspectsPage]
})
export class ApplicationAspectsPageModule {}
