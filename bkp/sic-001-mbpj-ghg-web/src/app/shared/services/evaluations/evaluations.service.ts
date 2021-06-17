import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evaluation } from './evaluations.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {

  public evaluationsUrl: string = environment.baseUrl + 'v1/evaluations/'
  public retrievedEvaluations: Evaluation[] = []
  public retrievedFilteredEvaluations: Evaluation[] = []
  
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

  doRetrieveAllEvaluations(): Observable<Evaluation[]> {
    let headers = this.createHeader()
    return this.http.get<Evaluation[]>(this.evaluationsUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedEvaluations = res
        // console.log('Evaluations: ', this.retrievedEvaluations)
      }),
      catchError(this.handleError)
    )
  }

  doCreateEvaluation(credentials: Form): Observable<any> {
    let headers = this.createHeader()
    return this.http.post<any>(this.evaluationsUrl, credentials, {headers: headers}).pipe(
      tap((res) => {
        // console.log('Create evaluation response: ', res)
      }),
      catchError(this.handleError)
    )
  }

  doRetrieveFilteredEvaluations(filterField): Observable<any> {
    let headers = this.createHeader()
    let filterUrl = this.evaluationsUrl + '?' + filterField
    return this.http.get<Evaluation[]>(filterUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedFilteredEvaluations = res
        // console.log('Filtered evaluations: ', this.retrievedFilteredEvaluations)
      }),
      catchError(this.handleError)
    )
  }

  doUpdateEvaluation(body: Form, id: string): Observable<any> {
    let urlUpdate = this.evaluationsUrl + id  + '/'
    return this.http.put<any>(urlUpdate, body).pipe(
      tap((res) => {
        // console.log('Updated user: ', res)
      })
    )
  }

}
