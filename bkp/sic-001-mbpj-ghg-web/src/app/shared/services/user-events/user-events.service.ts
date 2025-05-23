import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserEvent } from './user-events.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserEventsService {

  // URL
  public urlEvents: string = environment.baseUrl + 'v1/user-events/'

  // Data
  public events: UserEvent[] = []
  public eventsFiltered: UserEvent[] = []
  
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<UserEvent[]> {
    //let userEventsDescUrl = this.urlEvents + '?ordering=-date_time'
    return this.http.get<UserEvent[]>(this.urlEvents).pipe(
      tap((res) => {
        this.events = res
        // console.log('User events: ', this.events)
      })
    )
  }

  filter(field): Observable<any> {
    let filterUrl = this.urlEvents + '?' + field + '/'
    return this.http.get<UserEvent[]>(filterUrl).pipe(
      tap((res) => {
        this.eventsFiltered = res
        // console.log('User events: ', this.eventsFiltered)
      })
    )
  }

}
