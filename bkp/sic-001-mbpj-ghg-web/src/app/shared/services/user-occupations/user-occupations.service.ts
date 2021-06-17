import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserOccupation } from './user-occupations.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserOccupationsService {

  public userOccupationsUrl: string = environment.baseUrl + 'v1/user-occupations'
  public retrievedUserOccupations: UserOccupation[] = []

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  createHeader() {
    if (this.authService.tokenAccess){
      let headers = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Authorization': 'Bearer ' + this.authService.tokenAccess
        }
      )
      return headers
    }
    else {
      let headers = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        }
      )
      return headers
    }
  }

  private handleError(error: any) {
    console.log('error', error);
    return throwError(error);
  }

  doRetrieveAllUserOccupations(): Observable<UserOccupation[]> {
    let headers = this.createHeader()
    return this.http.get<UserOccupation[]>(this.userOccupationsUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedUserOccupations = res
        // console.log('User occupations: ', this.retrievedUserOccupations)
      }),
      catchError(this.handleError)
    )
  }

  doCreateUserOccupation(credentials: Form): Observable<any> {
    let headers = this.createHeader()
    return this.http.post<any>(this.userOccupationsUrl, credentials, {headers: headers}).pipe(
      tap((res) => {
        // console.log('Create user occupation: ', res)
      }),
      catchError(this.handleError)
    )
  }

}
