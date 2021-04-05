import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // Admin
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: './core/admin/admin.module#AdminModule',
        canActivate: [AuthGuard],
        data: {
          role: ['AD', 'SA']
        }
      },
      {
        path: 'user',
        loadChildren: './core/user/user.module#UserModule',
        canActivate: [AuthGuard],
        data: {
          role: ['AD', 'SA', 'EV', 'AP']
        }
      },
      {
        path: 'global',
        loadChildren: './core/global/global.module#GlobalModule',
        canActivate: [AuthGuard],
        data: {
          role: ['AD', 'SA', 'EV', 'AP']
        }
      }
    ],
  },
  // Authentication
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
  },
  // Public
  {
    path: '',
    loadChildren: './public/public.module#PublicModule'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
