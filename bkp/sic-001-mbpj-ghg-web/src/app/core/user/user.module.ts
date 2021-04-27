import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  BsDropdownModule, 
  ProgressbarModule, 
  TooltipModule, 
  ModalModule,
  BsDatepickerModule,
  TabsModule
} from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { UserRoutes } from './user.routing'
import { ApplicantsComponent } from './applicants/applicants.component';
import { ApplicationsComponent } from './applications/applications.component';
import { AuditComponent } from './audit/audit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { HousesComponent } from './houses/houses.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { ManagementComponent } from './management/management.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';
import { TestingComponent } from './testing/testing.component';
import { DetailComponent } from './applications/detail/detail.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    ApplicantsComponent,
    ApplicationsComponent,
    ApplicationDetailsComponent,
    AuditComponent,
    DashboardComponent,
    HelpdeskComponent,
    HousesComponent,
    HouseDetailsComponent,
    ManagementComponent,
    DetailComponent,
    ProfileComponent,
    ReportComponent,
    SettingsComponent,
    TestingComponent,
    NotificationsComponent,
    MaintenanceComponent,
    
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    LeafletModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(UserRoutes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxSpinnerModule,
    LoadingBarModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    NgxDatatableModule
  ]
})
export class UserModule { }
