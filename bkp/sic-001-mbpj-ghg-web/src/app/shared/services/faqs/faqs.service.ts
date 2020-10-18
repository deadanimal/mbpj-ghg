import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FAQ } from './faqs.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  public faqsUrl: string = environment.baseUrl + 'v1/faqs/'
  public retrievedFaqs: FAQ[] = []
  public retrievedFilteredFaqs: FAQ[] = []

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

  doRetrieveAllFaqs(): Observable<FAQ[]> {
    let headers = this.createHeader()
    //let houseEventsDescUrl = this.houseEventsUrl + '?ordering=-date_time'
    return this.http.get<FAQ[]>(this.faqsUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedFaqs = res
        console.log('FAQs: ', this.retrievedFaqs)
      }),
      catchError(this.handleError)
    )
  }

  doCreateFaq(credentials: Form): Observable<any> {
    let headers = this.createHeader()
    return this.http.post<any>(this.faqsUrl,credentials, {headers: headers}).pipe(
      tap((res) => {
        console.log(res)
      }),
      catchError(this.handleError)
    )
  }

  doUpdateFaq(credentials: Form, currentFaq: string): Observable<any> {
    let headers = this.createHeader()
    console.log('FAQ ID: ', currentFaq)
    let updateHouseUrl = this.faqsUrl + currentFaq + '/'
    return this.http.put<any>(updateHouseUrl, credentials, {headers: headers}).pipe(
      tap((res) => {
        console.log(res)
      }),
      catchError(this.handleError)
    )
  }

  doRetrieveFilteredFaqs(filterField): Observable<any> {
    let headers = this.createHeader()
    let filterUrl = this.faqsUrl + '?' + filterField + '/'
    return this.http.get<FAQ[]>(filterUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedFilteredFaqs = res
        console.log('Filtered faqs: ', this.retrievedFilteredFaqs)
      }),
      catchError(this.handleError)
    )
  }

}
