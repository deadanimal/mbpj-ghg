import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Application } from './applications.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  public applicationsUrl: string = environment.baseUrl + 'v1/applications/'
  public retrievedApplications: Application[] = []
  public retrievedFilteredApplications: Application[] = []

  public barangNakDelete: Application[] = []

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

  doRetrieveAllApplications(): Observable<Application[]> {
    let headers = this.createHeader()
    //let newApplicationUrl = this.applicationsUrl + '?ordering=-date_submitted'
    return this.http.get<Application[]>(this.applicationsUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedApplications = res
        console.log('Applications: ', this.retrievedApplications)
      }),
      catchError(this.handleError)
    )
  }

  retrieveFilteredApplications(filterField): Observable<any> {
    let headers = this.createHeader()
    let filterUrl = environment.baseUrl + 'v1/applications?' + filterField
    return this.http.get<Application[]>(filterUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedFilteredApplications = res
        console.log('Filtered applications: ', this.retrievedFilteredApplications)
      }),
      catchError(this.handleError)
    )
  }

  doAssignEvaluator(credentials, appID): Observable<any> {
    let headers = this.createHeader()
    let assignEvaluatorUrl = this.applicationsUrl + appID + '/'
    return this.http.put<any>(assignEvaluatorUrl, credentials, {headers: headers}).pipe(
      tap((res) => {
        console.log('Assign evaluator response: ', res)
      }),
      catchError(this.handleError)
    )
  }

  doChangeStatus(credentials, appID): Observable<any> {
    let headers = this.createHeader()
    let changeStatusUrl = this.applicationsUrl + appID + '/'
    return this.http.put<any>(changeStatusUrl, credentials, {headers: headers}).pipe(
      tap((res) => {
        console.log('Channge status response: ', res)
      }),
      catchError(this.handleError)
    )
  }

  doFilterNakDelete(): Observable<any> {
    let headers = this.createHeader()
    return this.http.get<any>(this.applicationsUrl, {headers: headers}).pipe(
      tap((res) => {
        this.barangNakDelete = res
      }),
      catchError(this.handleError)
    )
  }

  doDeleteScript(id): Observable<any> {
    let headers = this.createHeader()
    return this.http.delete<any>(this.applicationsUrl + id +'/', {headers: headers}).pipe(
      tap((res) => {

      }),
      catchError(this.handleError)
    )
  }

}
