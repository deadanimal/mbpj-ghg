import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CoreLayoutComponent } from './layouts/core-layout/core-layout.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/start',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'core',
    component: CoreLayoutComponent,
    children: [
      {
        path: 'applications',
        loadChildren: () => import('./core/applications/applications.module').then( m => m.ApplicationsPageModule),
        canActivate: [AuthGuard],
        data: {
          role: 'AP'
        }
      },
      {
        path: 'application/walkthrough',
        loadChildren: () => import('./core/application-walkthrough/application-walkthrough.module').then( m => m.ApplicationWalkthroughPageModule),
        canActivate: [AuthGuard],
        data: {
          role: 'AP'
        }
      },
      {
        path: 'home',
        loadChildren: () => import('./core/home/home.module').then( m => m.HomePageModule),
        canActivate: [AuthGuard],
        data: {
          role: [
            'AP','EV'
          ]
        }
      },
      {
        path: 'my-home',
        loadChildren: () => import('./core/my-home/my-home.module').then( m => m.MyHomePageModule),
        canActivate: [AuthGuard],
        data: {
          role: 'AP'
        }
      },
      {
        path: 'notifications',
        loadChildren: () => import('./core/notifications/notifications.module').then( m => m.NotificationsPageModule),
        canActivate: [AuthGuard],
        data: {
          role: [
            'AP','EV'
          ]
        }
      },
      {
        path: 'profile',
        loadChildren: () => import('./core/profile/profile.module').then( m => m.ProfilePageModule),
        canActivate: [AuthGuard],
        data: {
          role: [
            'AP','EV'
          ]
        }
      },
    ]
  },
  {
    path: 'about',
    loadChildren: () => import('./core/about/about.module').then( m => m.AboutPageModule),
    canActivate: [AuthGuard],
    data: {
      role: [
            'AP','EV'
          ]
    }
  },
  {
    path: 'application/apply',
    loadChildren: () => import('./core/application-apply/application-apply.module').then( m => m.ApplicationApplyPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'AP'
    }
  },
  {
    path: 'application/detail/:id',
    loadChildren: () => import('./core/application-detail/application-detail.module').then( m => m.ApplicationDetailPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'AP'
    }
  },
  {
    path: 'application/select-house',
    loadChildren: () => import('./core/application-house/application-house.module').then( m => m.ApplicationHousePageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'AP'
    }
  },
  {
    path: 'my-home/add',
    loadChildren: () => import('./core/my-home-add/my-home-add.module').then( m => m.MyHomeAddPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'AP'
    }
  },
  {
    path: 'my-home/detail',
    loadChildren: () => import('./core/my-home-detail/my-home-detail.module').then( m => m.MyHomeDetailPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'AP'
    }
  },
  {
    path: 'faq',
    loadChildren: () => import('./core/faq/faq.module').then( m => m.FaqPageModule),
    canActivate: [AuthGuard],
    data: {
      role: [
            'AP','EV'
          ]
    }
  },
  {
    path: 'helpdesk',
    loadChildren: () => import('./core/helpdesk/helpdesk.module').then( m => m.HelpdeskPageModule),
    data: {
      role: [
            'AP','EV'
          ]
    }
  },
  {
    path: 'information',
    loadChildren: () => import('./core/information/information.module').then( m => m.InformationPageModule),
    canActivate: [AuthGuard],
    data: {
      role: [
        'AP', 'EV'
      ]
    }
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'auth/register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'auth/forgot',
    loadChildren: () => import('./auth/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'auth/walkthrough',
    loadChildren: () => import('./pages/walkthrough/walkthrough.module').then( m => m.WalkthroughPageModule)
  },
  {
    path: 'auth/start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'application-house',
    loadChildren: () => import('./core/application-house/application-house.module').then( m => m.ApplicationHousePageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'AP'
    }
  },
  {
    path: 'tips',
    loadChildren: () => import('./core/tips/tips.module').then( m => m.TipsPageModule),
    canActivate: [AuthGuard],
    data: {
      role: [
            'AP','EV'
          ]
    }
  },
  {
    path: 'application-aspects',
    loadChildren: () => import('./core/application-aspects/application-aspects.module').then( m => m.ApplicationAspectsPageModule)
  },
  {
    path: 'evaluate',
    loadChildren: () => import('./core/evaluate/evaluate.module').then( m => m.EvaluatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
