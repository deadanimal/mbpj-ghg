import { Injectable } from '@angular/core';
import { EvaluationSchedule } from './evaluation-schedules.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Form } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  // URL
  private urlSchedule: string = environment.baseUrl + 'v1/application-evaluation-schedules/'
  private urlScheduleExtended: string = environment.baseUrl + 'v1/application-evaluation-schedules/extended/'

  // Data
  public schedule: EvaluationSchedule
  public scheduleExtended: EvaluationSchedule
  public schedules: EvaluationSchedule[] = []
  public schedulesExtended: EvaluationSchedule[] = []
  public schedulesFiltered: EvaluationSchedule[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form) {
    return this.http.post<EvaluationSchedule>(this.urlSchedule, body).pipe(
      tap((res) => {
        console.log('Evaluation schedule: ', res)
      })
    )
  }

  getAll() {
    return this.http.get<EvaluationSchedule[]>(this.urlSchedule).pipe(
      tap((res: EvaluationSchedule[]) => {
        this.schedules = res
        console.log('Evaluation schedule: ', this. schedules)
      })
    )
  }

  getAllExtended() {
    return this.http.get<EvaluationSchedule[]>(this.urlScheduleExtended).pipe(
      tap((res: EvaluationSchedule[]) => {
        this.schedulesExtended = res
        console.log('Evaluation schedule: ', this.schedulesExtended)
      })
    )
  }

  getSingle(id: number) {
    let urlTemp = this.urlSchedule + id + '/'
    return this.http.get<EvaluationSchedule>(urlTemp).pipe(
      tap((res: EvaluationSchedule) => {
        this.schedule = res
        console.log('Evaluation schedule: ', this.schedule)
      })
    )
  }

  getSingleExtended(id: number) {
    let urlTemp = this.urlScheduleExtended + id + '/'
    return this.http.get<EvaluationSchedule>(urlTemp).pipe(
      tap((res: EvaluationSchedule) => {
        this.scheduleExtended = res
        console.log('Evaluation schedule: ', this.scheduleExtended)
      })
    )
  }

  update(id: number) {
    let urlTemp = this.urlSchedule + id + '/'
    return this.http.get<EvaluationSchedule>(urlTemp).pipe(
      tap((res: EvaluationSchedule) => {
        this.schedule = res
        console.log('Evaluation schedule: ', this.schedule)
      })
    )
  }

  filter(field: string) {
    let urlTemp = this.urlScheduleExtended + '?' + field + '/'
    return this.http.get<EvaluationSchedule[]>(urlTemp).pipe(
      tap((res: EvaluationSchedule[]) => {
        this.schedulesFiltered = res
        console.log('Evaluation schedules: ', this.schedulesFiltered)
      })
    )
  }

  getPendingEvaluation() {
    let urlTemp = this.urlSchedule + 'pending_evaluation'
    return this.http.get<any>(urlTemp).pipe(
      tap((res: any) => {
        this.schedule = res
        // console.log('Evaluation schedule: ', this.schedule)
      })
    )
  }

}
