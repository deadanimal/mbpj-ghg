import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TicketAnswer } from './ticket-answers.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TicketAnswersService {

  public urlAnswer: string = environment.baseUrl + 'v1/ticket-answers/'
  public answers: TicketAnswer[] = []
  public answersFiltered: TicketAnswer[] = []
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<TicketAnswer[]> {
    //let ticketAnswersDescUrl = this.urlAnswer + '?ordering=-date_submitted'
    return this.http.get<TicketAnswer[]>(this.urlAnswer).pipe(
      tap((res) => {
        this.answers = res
        // console.log('Ticket answers: ', this.answers)
      })
    )
  }

  create(body: Form): Observable<any> {
    return this.http.post<any>(this.urlAnswer, body).pipe(
      tap((res) => {
        // console.log('Create ticket answer: ', res)
      })
    )
  }

  filter(filterField): Observable<any> {
    let filterUrl = this.urlAnswer + '?' + filterField + '/'
    return this.http.get<TicketAnswer[]>(filterUrl).pipe(
      tap((res) => {
        this.answersFiltered = res
        // console.log('Filtered ticket answers: ', this.answersFiltered)
      })
    )
  }

}
