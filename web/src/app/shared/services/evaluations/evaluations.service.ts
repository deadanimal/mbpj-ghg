import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Evaluation } from './evaluations.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {

  // URL
  public urlEvaluations: string = environment.baseUrl + 'v1/application-evaluations/'

  // Data
  public evaluation: Evaluation
  public evaluations: Evaluation[] = []
  public evaluationsFiltered: Evaluation[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form): Observable<Evaluation> {
    return this.http.post<any>(this.urlEvaluations, body).pipe(
      tap((res) => {
        this.evaluation = res
        console.log('Evaluation: ', this.evaluation)
      })
    )
  }

  getAll(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(this.urlEvaluations).pipe(
      tap((res) => {
        this.evaluations = res
        console.log('Evaluations: ', this.evaluations)
      })
    )
  }

  getOne(id: String): Observable<Evaluation> {
    let urlTemp = this.urlEvaluations + id + '/'
    return this.http.get<Evaluation>(urlTemp).pipe(
      tap((res) => {
        this.evaluation = res
        console.log('Evaluation: ', this.evaluation)
      })
    )
  }

  update(id: String, body: Form): Observable<Evaluation> {
    let urlTemp = this.urlEvaluations + id + '/'
    return this.http.put<Evaluation>(urlTemp, body).pipe(
      tap((res) => {
        this.evaluation = res
        console.log('Evaluation', this.evaluation)
      })
    )
  }

  filter(field: String): Observable<Evaluation[]> {
    let urlTemp = this.urlEvaluations + '?' + field
    return this.http.get<Evaluation[]>(urlTemp).pipe(
      tap((res) => {
        this.evaluationsFiltered = res
        console.log('Evaluations', this.evaluationsFiltered)
      })
    )
  }

}
