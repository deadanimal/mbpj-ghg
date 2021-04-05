import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Assessment } from './assessments.model';

@Injectable({
  providedIn: 'root'
})
export class AssessmentsService {

  // URL
  public urlAssessments: string = environment.baseUrl + 'v1/application-assesments/'

  // Data
  public assessment: Assessment
  public assessments: Assessment[] = []
  public assessmentsFiltered: Assessment[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: any): Observable<Assessment> {
    return this.http.post<any>(this.urlAssessments, body).pipe(
      tap((res) => {
        this.assessment = res
        // console.log('Assessment: ', this.assessment)
      })
    )
  }

  getAll(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(this.urlAssessments).pipe(
      tap((res) => {
        this.assessments = res
        // console.log('Assessments: ', this.assessments)
      })
    )
  }

  getOne(id: any): Observable<Assessment> {
    let urlTemp = this.urlAssessments + id + '/'
    return this.http.get<Assessment>(urlTemp).pipe(
      tap((res) => {
        this.assessment = res
        // console.log('Assessment: ', this.assessment)
      })
    )
  }

  update(id: any, body: any): Observable<Assessment> {
    let urlTemp = this.urlAssessments + id + '/'
    return this.http.put<Assessment>(urlTemp, body).pipe(
      tap((res) => {
        this.assessment = res
        // console.log('Assessment', this.assessment)
      })
    )
  }

  filter(field: any): Observable<Assessment[]> {
    let urlTemp = this.urlAssessments + '?' + field
    return this.http.get<Assessment[]>(urlTemp).pipe(
      tap((res) => {
        this.assessmentsFiltered = res
        // console.log('Assessments', this.assessmentsFiltered)
      })
    )
  }

}
