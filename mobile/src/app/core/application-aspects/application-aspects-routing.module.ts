import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationAspectsPage } from './application-aspects.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationAspectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationAspectsPageRoutingModule {}
