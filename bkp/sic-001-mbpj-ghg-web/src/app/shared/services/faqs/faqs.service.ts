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

  private handleError(error: any) {
    console.log('error', error);
    return throwError(error);
  }

  doRetrieveAllFaqs(): Observable<FAQ[]> {
    return this.http.get<FAQ[]>(this.faqsUrl).pipe(
      tap((res) => {
        this.retrievedFaqs = res
        // console.log('FAQs: ', this.retrievedFaqs)
      }),
      catchError(this.handleError)
    )
  }

  doCreateFaq(body: Form): Observable<any> {
    return this.http.post<any>(this.faqsUrl,body).pipe(
      tap((res) => {
        // console.log(res)
      }),
      catchError(this.handleError)
    )
  }

  doUpdateFaq(body: Form, currentFaq: string): Observable<any> {
    let urlUpdate = this.faqsUrl + currentFaq + '/'
    return this.http.put<any>(urlUpdate, body).pipe(
      tap((res) => {
        // console.log(res)
      }),
      catchError(this.handleError)
    )
  }

  doDeleteFaq(currentFaq: string): Observable<any> {
    let urlDelete = this.faqsUrl + currentFaq + "/";
    return this.http.delete<any>(urlDelete).pipe(
      tap((res) => {
        // console.log(res)
      })
    );
  }

  doRetrieveFilteredFaqs(filterField): Observable<any> {
    let urlFilter = this.faqsUrl + '?' + filterField
    return this.http.get<FAQ[]>(urlFilter).pipe(
      tap((res) => {
        this.retrievedFilteredFaqs = res
        // console.log('Filtered faqs: ', this.retrievedFilteredFaqs)
      }),
      catchError(this.handleError)
    )
  }

}
