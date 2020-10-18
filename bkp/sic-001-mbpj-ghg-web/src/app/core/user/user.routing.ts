import { Routes } from '@angular/router';
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

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'applications',
                children: [
                    {
                        path: '',
                        component: ApplicationsComponent
                    },
                    {
                        path: 'detail',
                        component: DetailComponent
                    },
                    {
                        path: 'details',
                        component: ApplicationDetailsComponent
                    }
                ]
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: 'testing',
                component: TestingComponent
            },
            {
                path: 'applicants',
                component: ApplicantsComponent
            },
            {
                path: 'management',
                component: ManagementComponent
            },
            {
                path: 'notifications',
                component: NotificationsComponent
            },
            {
                path: 'houses',
                children: [
                    {
                        path: '',
                        component: HousesComponent
                    },
                    {
                        path: 'details',
                        component: HouseDetailsComponent
                    }
                ]
            },
            {
                path: 'user-profile',
                component: ProfileComponent
            },
            {
                path: 'helpdesk',
                component: HelpdeskComponent
            },
            {
                path: 'audit',
                component: AuditComponent
            },
            {
                path: 'maintenance',
                component: MaintenanceComponent
            }
        ]
    }
]