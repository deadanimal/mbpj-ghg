import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot,
  CanActivate, 
  Router
} from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private auth: AuthService
  ){ }
  
  canActivate(route: ActivatedRouteSnapshot){
    const expectedRoles = route.data.role
    let isAdmin = false

    for (let expected of expectedRoles) {
      if (expected === this.auth.userType) {
        isAdmin = true
      }
    }

    if (isAdmin) {
      // console.log('Yes')
      return true
    }
    else {
      return this.router.navigate(['/auth/login'])
    }

    /*
    // Old
    const expectedRole = route.data.role
    if (this.auth.userType == expectedRole) {
      return true
    }
    else {
      return this.router.navigate(['/auth/login'])
    }
    */
  }
  
}
