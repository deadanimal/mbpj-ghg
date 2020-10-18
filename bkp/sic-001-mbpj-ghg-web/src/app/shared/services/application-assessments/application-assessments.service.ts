import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationAssessment } from './application-assessments.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationAssessmentsService {

  public applicationAssessmentsUrl: string = environment.baseUrl + 'v1/application-assessments/'
  public retrievedApplicationAssessments: ApplicationAssessment[] = []
  public retrievedFilteredApplicationAssessments: ApplicationAssessment[] = []

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

  doRetrieveAllApplicationAssessments(): Observable<ApplicationAssessment[]> {
    let headers = this.createHeader()
    return this.http.get<ApplicationAssessment[]>(this.applicationAssessmentsUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedApplicationAssessments = res
        console.log('Application assessments: ', this.retrievedApplicationAssessments)
      }),
      catchError(this.handleError)
    )
  }

  doCreateApplicationAssessment(credentials: Form): Observable<any> {
    let headers = this.createHeader()
    return this.http.post<any>(this.applicationAssessmentsUrl, credentials, {headers: headers}).pipe(
      tap((res) => {
        console.log('Create application assessment response: ', res)
      }),
      catchError(this.handleError)
    )
  }

  doRetrieveFilteredApplicationAssessments(filterField): Observable<any> {
    let headers = this.createHeader()
    let filterUrl = this.applicationAssessmentsUrl + '?' + filterField + '/'
    return this.http.get<ApplicationAssessment[]>(filterUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedFilteredApplicationAssessments = res
        console.log('Filtered application assessments: ', this.retrievedFilteredApplicationAssessments)
      }),
      catchError(this.handleError)
    )
  }

}
