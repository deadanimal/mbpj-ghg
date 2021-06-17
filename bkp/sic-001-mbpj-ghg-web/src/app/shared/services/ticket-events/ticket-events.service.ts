import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TicketEvent } from './ticket-events.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TicketEventsService {

  // URL
  public urlEvents: string = environment.baseUrl + 'v1/ticket-events/'

  // Data
  public events: TicketEvent[] = []
  public eventsFiltered: TicketEvent[] = []
  
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<TicketEvent[]> {
    //let TicketEventsDescUrl = this.urlEvents + '?ordering=-date_time'
    return this.http.get<TicketEvent[]>(this.urlEvents).pipe(
      tap((res) => {
        this.events = res
        // console.log('Ticket events: ', this.events)
      })
    )
  }

  filter(field): Observable<any> {
    let filterUrl = this.urlEvents + '?' + field + '/'
    return this.http.get<TicketEvent[]>(filterUrl).pipe(
      tap((res) => {
        this.eventsFiltered = res
        // console.log('Ticket events: ', this.eventsFiltered)
      })
    )
  }

}
