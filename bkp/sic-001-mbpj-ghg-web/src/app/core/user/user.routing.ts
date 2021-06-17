import { Routes } from "@angular/router";
import { ApplicantsComponent } from "./applicants/applicants.component";
import { ApplicationsComponent } from "./applications/applications.component";
import { AuditComponent } from "./audit/audit.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HelpdeskComponent } from "./helpdesk/helpdesk.component";
import { HousesComponent } from "./houses/houses.component";
import { HouseDetailsComponent } from "./house-details/house-details.component";
import { ProfileComponent } from "./profile/profile.component";
import { ReportComponent } from "./report/report.component";
import { SettingsComponent } from "./settings/settings.component";
import { TestingComponent } from "./testing/testing.component";
import { ApplicationDetailsComponent } from "./application-details/application-details.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { AssessmentTaxesComponent } from "./assessment-taxes/assessment-taxes.component";
import { UsersComponent } from "./management/users/users.component";
import { FaqsComponent } from "./management/faqs/faqs.component";
import { RebatesComponent } from "./rebates/rebates.component";
import { CarbonEmissionFactorsComponent } from "./carbon-emission-factors/carbon-emission-factors.component";

export const UserRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "applications",
        children: [
          {
            path: "",
            component: ApplicationsComponent,
          },
          {
            path: "details",
            component: ApplicationDetailsComponent,
          },
        ],
      },
      {
        path: "rebates",
        component: RebatesComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "report",
        component: ReportComponent,
      },
      {
        path: "settings",
        component: SettingsComponent,
      },
      {
        path: "testing",
        component: TestingComponent,
      },
      {
        path: "applicants",
        component: ApplicantsComponent,
      },
      {
        path: "assessment-taxes",
        component: AssessmentTaxesComponent,
      },
      {
        path: "carbon-emission-factors",
        component: CarbonEmissionFactorsComponent,
      },
      {
        path: "management",
        children: [
          {
            path: "users",
            component: UsersComponent,
          },
          {
            path: "faqs",
            component: FaqsComponent,
          },
          {
            path: "audit",
            component: AuditComponent,
          },
        ],
      },
      {
        path: "notifications",
        component: NotificationsComponent,
      },
      {
        path: "houses",
        children: [
          {
            path: "",
            component: HousesComponent,
          },
          {
            path: "details",
            component: HouseDetailsComponent,
          },
        ],
      },
      {
        path: "user-profile",
        component: ProfileComponent,
      },
      {
        path: "helpdesk",
        component: HelpdeskComponent,
      },
      {
        path: "maintenance",
        component: MaintenanceComponent,
      },
    ],
  },
];
