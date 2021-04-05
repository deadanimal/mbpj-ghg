import { Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { HousesComponent } from './houses/houses.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { RebatesComponent } from './rebates/rebates.component';
import { ReportComponent } from './report/report.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const AdminRoutes: Routes = [
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
                        component: ApplicationDetailComponent
                    }
                ]
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'helpdesk',
                component: HelpdeskComponent
            },
            {
                path: 'houses',
                children: [
                    {
                        path: '',
                        component: HousesComponent
                    },
                    {
                        path: 'detail',
                        component: HouseDetailComponent
                    }
                ]
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trail',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'users',
                        children: [
                            {
                                path: '',
                                component: ManagementUserComponent
                            },
                            {
                                path: 'detail',
                                component: UserDetailsComponent
                            }
                        ]
                    }
                ]
            },
            {
                path: 'rebates',
                component: RebatesComponent
            },
            {
                path: 'report',
                component: ReportComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/global/not-found'
    }
]