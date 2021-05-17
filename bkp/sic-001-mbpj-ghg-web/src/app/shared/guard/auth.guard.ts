import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private auth: AuthService
  ){

  }
  canActivate(route: ActivatedRouteSnapshot){
    const expectedRole = route.data.role
    this.auth.decodedToken();
    if (this.auth.userType == expectedRole) {
      return true
    }
    else {
      return this.router.navigate(['/auth/login'])
    }
  }
  
}
