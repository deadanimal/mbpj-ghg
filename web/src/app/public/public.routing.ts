import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

export const PublicRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'password-reset',
                component: PasswordResetComponent
            }
        ]
    }
]