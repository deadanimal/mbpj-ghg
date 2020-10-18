import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Rebate } from './rebates.model';

@Injectable({
  providedIn: 'root'
})
export class RebatesService {

  // URL
  public urlRebates: string = environment.baseUrl + 'v1/rebates/'

  // Data
  public rebate: Rebate
  public rebates: Rebate[] = []
  public rebatesFiltered: Rebate[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form): Observable<Rebate> {
    return this.http.post<any>(this.urlRebates, body).pipe(
      tap((res) => {
        this.rebate = res
        console.log('Rebate: ', this.rebate)
      })
    )
  }

  getAll(): Observable<Rebate[]> {
    return this.http.get<Rebate[]>(this.urlRebates).pipe(
      tap((res) => {
        this.rebates = res
        console.log('Rebates: ', this.rebates)
      })
    )
  }

  getOne(id: String): Observable<Rebate> {
    let urlTemp = this.urlRebates + id + '/'
    return this.http.get<Rebate>(urlTemp).pipe(
      tap((res) => {
        this.rebate = res
        console.log('Rebate: ', this.rebate)
      })
    )
  }

  update(id: String, body: Form): Observable<Rebate> {
    let urlTemp = this.urlRebates + id + '/'
    return this.http.put<Rebate>(urlTemp, body).pipe(
      tap((res) => {
        this.rebate = res
        console.log('Rebate', this.rebate)
      })
    )
  }

  filter(field: String): Observable<Rebate[]> {
    let urlTemp = this.urlRebates + '?' + field
    return this.http.get<Rebate[]>(urlTemp).pipe(
      tap((res) => {
        this.rebatesFiltered = res
        console.log('Rebates', this.rebatesFiltered)
      })
    )
  }

}
