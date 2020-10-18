import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rebate } from './rebates.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RebatesService {

  public rebatesUrl: string = environment.baseUrl + 'v1/rebates/'
  public retrievedRebates: Rebate[] = []

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

  doRetrieveAllRebates(): Observable<Rebate[]> {
    let headers = this.createHeader()
    return this.http.get<Rebate[]>(this.rebatesUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedRebates = res
        console.log('Rebate types: ', this.retrievedRebates)
      }),
      catchError(this.handleError)
    )
  }

  doCreateRebate(credentials: Form): Observable<any> {
    let headers = this.createHeader()
    return this.http.post<any>(this.rebatesUrl, credentials, {headers: headers}).pipe(
      tap((res) => {
        console.log('Create rebate: ', res)
      }),
      catchError(this.handleError)
    )
  }
  
}
