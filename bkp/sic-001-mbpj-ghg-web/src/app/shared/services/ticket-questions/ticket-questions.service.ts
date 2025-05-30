import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TicketQuestion } from './ticket-questions.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TicketQuestionsService {

  public urlQuestion: string = environment.baseUrl + 'v1/ticket-questions/'
  public questions: TicketQuestion[] = []
  public questionsFiltered: TicketQuestion[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form): Observable<any> {
    return this.http.post<any>(this.urlQuestion, body).pipe(
      tap((res) => {
        // console.log('Create ticket question: ', res)
      })
    )
  }

  getAll(): Observable<TicketQuestion[]> {
    //let ticketQuestionsDescUrl = this.urlQuestion +'?ordering=-status'
    return this.http.get<TicketQuestion[]>(this.urlQuestion).pipe(
      tap((res) => {
        this.questions = res
        // console.log('Ticket questions: ', this.questions)
      })
    )
  }

  filter(filterField): Observable<any> {
    let urlFIlter = this.urlQuestion + '?' + filterField + '/'
    return this.http.get<TicketQuestion[]>(urlFIlter).pipe(
      tap((res) => {
        this.questionsFiltered = res
        // console.log('Filtered ticket questions: ', this.questionsFiltered)
      })
    )
  }

  update(body: Form, id): Observable<any> {
    let urlUpdate = this.urlQuestion + id  + '/'
    return this.http.put<any>(urlUpdate, body).pipe(
      tap((res) => {
        // console.log('Updated user: ', res)
      })
    )
  }

  resolve(id: String) {
    let urlResolve = this.urlQuestion + id + '/resolve/'
    return this.http.get<any>(urlResolve).pipe(
      tap((res) => {
        // console.log('Ticket resolved')
      })
    )
  }

}
