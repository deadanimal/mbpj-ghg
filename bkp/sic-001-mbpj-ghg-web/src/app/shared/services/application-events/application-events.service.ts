import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationEvent } from './application-events.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationEventsService {

  // URL
  public urlEvents: string = environment.baseUrl + 'v1/application-events/'

  // Data
  public events: ApplicationEvent[] = []
  public eventsFiltered: ApplicationEvent[] = []
  
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<ApplicationEvent[]> {
    //let ApplicationEventsDescUrl = this.urlEvents + '?ordering=-date_time'
    return this.http.get<ApplicationEvent[]>(this.urlEvents).pipe(
      tap((res) => {
        this.events = res
        console.log('Application events: ', this.events)
      })
    )
  }

  filter(field): Observable<any> {
    let filterUrl = this.urlEvents + '?' + field + '/'
    return this.http.get<ApplicationEvent[]>(filterUrl).pipe(
      tap((res) => {
        this.eventsFiltered = res
        console.log('Application events: ', this.eventsFiltered)
      })
    )
  }

}
