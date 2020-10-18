import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Schedule } from './schedules.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  // URL
  public urlSchedules: string = environment.baseUrl + 'v1/application-evaluation-schedules/'

  // Data
  public schedule: Schedule
  public schedules: Schedule[] = []
  public schedulesFiltered: Schedule[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form): Observable<Schedule> {
    return this.http.post<any>(this.urlSchedules, body).pipe(
      tap((res) => {
        this.schedule = res
        console.log('Schedule: ', this.schedule)
      })
    )
  }

  getAll(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.urlSchedules).pipe(
      tap((res) => {
        this.schedules = res
        console.log('Schedules: ', this.schedules)
      })
    )
  }

  getOne(id: String): Observable<Schedule> {
    let urlTemp = this.urlSchedules + id + '/'
    return this.http.get<Schedule>(urlTemp).pipe(
      tap((res) => {
        this.schedule = res
        console.log('Schedule: ', this.schedule)
      })
    )
  }

  update(id: String, body: Form): Observable<Schedule> {
    let urlTemp = this.urlSchedules + id + '/'
    return this.http.put<Schedule>(urlTemp, body).pipe(
      tap((res) => {
        this.schedule = res
        console.log('Schedule', this.schedule)
      })
    )
  }

  filter(field: String): Observable<Schedule[]> {
    let urlTemp = this.urlSchedules + '?' + field
    return this.http.get<Schedule[]>(urlTemp).pipe(
      tap((res) => {
        this.schedulesFiltered = res
        console.log('Schedules', this.schedulesFiltered)
      })
    )
  }

}
