import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AssessmentAspect } from './assessment-aspects.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AssessmentAspectsService {

  public assessmentAspectsUrl: string = environment.baseUrl + 'v1/assessment-aspects/'
  public retrievedAssessmentAspects: AssessmentAspect[] = []
  public retrievedFilteredAssessmentAspects: AssessmentAspect[] = []
  
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

  doRetrieveAllAssessmentAspects(): Observable<AssessmentAspect[]> {
    let headers = this.createHeader()
    return this.http.get<AssessmentAspect[]>(this.assessmentAspectsUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedAssessmentAspects = res
        console.log('Assessment aspects: ', this.retrievedAssessmentAspects)
      }),
      catchError(this.handleError)
    )
  }

  doCreateAssessmentAspect(credentials: Form): Observable<any> {
    let headers = this.createHeader()
    return this.http.post<any>(this.assessmentAspectsUrl, credentials, {headers: headers}).pipe(
      tap((res) => {
        console.log('Create assessment aspect response: ', res)
      }),
      catchError(this.handleError)
    )
  }

  doRetrieveFilteredAssessmentAspects(filterField): Observable<any> {
    let headers = this.createHeader()
    let filterUrl = this.assessmentAspectsUrl + '?' + filterField + '/'
    return this.http.get<AssessmentAspect[]>(filterUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedFilteredAssessmentAspects = res
        console.log('Filtered assessment aspects: ', this.retrievedFilteredAssessmentAspects)
      }),
      catchError(this.handleError)
    )
  }

}
