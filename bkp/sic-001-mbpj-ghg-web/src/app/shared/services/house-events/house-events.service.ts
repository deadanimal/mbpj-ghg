import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HouseEvent } from './house-events.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HouseEventsService {

  // URL
  public urlEvents: string = environment.baseUrl + 'v1/house-events/'

  // Data
  public events: HouseEvent[] = []
  public eventsFiltered: HouseEvent[] = []
  
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<HouseEvent[]> {
    //let HouseEventsDescUrl = this.urlEvents + '?ordering=-date_time'
    return this.http.get<HouseEvent[]>(this.urlEvents).pipe(
      tap((res) => {
        this.events = res
        // console.log('House events: ', this.events)
      })
    )
  }

  filter(field): Observable<any> {
    let filterUrl = this.urlEvents + '?' + field + '/'
    return this.http.get<HouseEvent[]>(filterUrl).pipe(
      tap((res) => {
        this.eventsFiltered = res
        // console.log('House events: ', this.eventsFiltered)
      })
    )
  }

}
