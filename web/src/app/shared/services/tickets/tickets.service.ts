import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { 
  Ticket, 
  TicketTemp,
  TicketMessage,
  TicketMessageTemp
} from './tickets.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  
  // URL
  public urlTickets: string = environment.baseUrl + 'v1/tickets/'

  // Data
  public ticket: TicketTemp
  public tickets: TicketTemp[] = []
  public ticketsFiltered: TicketTemp[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: any): Observable<TicketTemp> {
    return this.http.post<any>(this.urlTickets, body).pipe(
      tap((res) => {
        this.ticket = res
        // console.log('Ticket: ', this.ticket)
      })
    )
  }

  getAll(): Observable<TicketTemp[]> {
    return this.http.get<TicketTemp[]>(this.urlTickets).pipe(
      tap((res) => {
        this.tickets = res
        // console.log('Tickets: ', this.tickets)
      })
    )
  }

  getOne(id: any): Observable<TicketTemp> {
    let urlTemp = this.urlTickets + id + '/'
    return this.http.get<TicketTemp>(urlTemp).pipe(
      tap((res) => {
        this.ticket = res
        // console.log('Ticket: ', this.ticket)
      })
    )
  }

  update(id: any, body: any): Observable<TicketTemp> {
    let urlTemp = this.urlTickets + id + '/'
    return this.http.put<TicketTemp>(urlTemp, body).pipe(
      tap((res) => {
        this.ticket = res
        // console.log('Ticket', this.ticket)
      })
    )
  }

  filter(field: any): Observable<TicketTemp[]> {
    let urlTemp = this.urlTickets + '?' + field
    return this.http.get<TicketTemp[]>(urlTemp).pipe(
      tap((res) => {
        this.ticketsFiltered = res
        // console.log('Tickets', this.ticketsFiltered)
      })
    )
  }
}
