import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const GlobalRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'notifications',
                component: NotificationsComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: 'not-found',
                component: NotFoundComponent
            }
        ]
    }
]