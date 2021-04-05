import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Evaluation, EvaluationExtended } from './evaluations.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {

  // URL
  public urlEvaluations: string = environment.baseUrl + 'v1/application-evaluations/'

  // Data
  public evaluation: Evaluation
  public evaluations: EvaluationExtended[] = []
  public evaluationsFiltered: Evaluation[] = []
  public evaluationExtended: EvaluationExtended

  constructor(
    private http: HttpClient
  ) { }

  create(body: any): Observable<Evaluation> {
    return this.http.post<any>(this.urlEvaluations, body).pipe(
      tap((res) => {
        this.evaluation = res
        // console.log('Evaluation: ', this.evaluation)
      })
    )
  }

  getAll(): Observable<EvaluationExtended[]> {
    let urlTemp = this.urlEvaluations + 'extended_all'
    return this.http.get<EvaluationExtended[]>(urlTemp).pipe(
      tap((res) => {
        this.evaluations = res
        // console.log('Evaluations: ', this.evaluations)
      })
    )
  }

  getOne(id: any): Observable<EvaluationExtended> {
    let urlTemp = this.urlEvaluations + id + '/extended'
    return this.http.get<EvaluationExtended>(urlTemp).pipe(
      tap((res) => {
        this.evaluationExtended = res
        // console.log('Evaluation: ', this.evaluationExtended)
      })
    )
  }

  update(id: any, body: any): Observable<Evaluation> {
    let urlTemp = this.urlEvaluations + id + '/'
    return this.http.patch<Evaluation>(urlTemp, body).pipe(
      tap((res) => {
        this.evaluation = res
        // console.log('Evaluation', this.evaluation)
      })
    )
  }

  filter(field: any): Observable<Evaluation[]> {
    let urlTemp = this.urlEvaluations + '?' + field
    return this.http.get<Evaluation[]>(urlTemp).pipe(
      tap((res) => {
        this.evaluationsFiltered = res
        // console.log('Evaluations', this.evaluationsFiltered)
      })
    )
  }

}
