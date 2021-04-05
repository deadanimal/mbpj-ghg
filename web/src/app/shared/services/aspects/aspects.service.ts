import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Aspect } from './aspects.model';

@Injectable({
  providedIn: 'root'
})
export class AspectsService {

  // URL
  public urlAspects: string = environment.baseUrl + 'v1/aspects/'

  // Data
  public aspect: Aspect
  public aspects: Aspect[] = []
  public aspectsFiltered: Aspect[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: any): Observable<Aspect> {
    return this.http.post<any>(this.urlAspects, body).pipe(
      tap((res) => {
        this.aspect = res
        // console.log('Aspect: ', this.aspect)
      })
    )
  }

  getAll(): Observable<Aspect[]> {
    return this.http.get<Aspect[]>(this.urlAspects).pipe(
      tap((res) => {
        this.aspects = res
        // console.log('Aspects: ', this.aspects)
      })
    )
  }

  getOne(id: any): Observable<Aspect> {
    let urlTemp = this.urlAspects + id + '/'
    return this.http.get<Aspect>(urlTemp).pipe(
      tap((res) => {
        this.aspect = res
        // console.log('Aspect: ', this.aspect)
      })
    )
  }

  update(id: any, body: any): Observable<Aspect> {
    let urlTemp = this.urlAspects + id + '/'
    return this.http.put<Aspect>(urlTemp, body).pipe(
      tap((res) => {
        this.aspect = res
        // console.log('Aspect', this.aspect)
      })
    )
  }

  filter(field: any): Observable<Aspect[]> {
    let urlTemp = this.urlAspects + '?' + field
    return this.http.get<Aspect[]>(urlTemp).pipe(
      tap((res) => {
        this.aspectsFiltered = res
        // console.log('Aspects', this.aspectsFiltered)
      })
    )
  }

}
