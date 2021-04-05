import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Rebate, RebateExtended } from './rebates.model';

@Injectable({
  providedIn: 'root'
})
export class RebatesService {

  // URL
  public urlRebates: string = environment.baseUrl + 'v1/rebates/'

  // Data
  public rebate: Rebate
  public rebateExtended: RebateExtended
  public rebates: RebateExtended[] = []
  public rebatesFiltered: Rebate[] = []

  public statistics: any

  constructor(
    private http: HttpClient
  ) { }

  create(body: any): Observable<Rebate> {
    return this.http.post<any>(this.urlRebates, body).pipe(
      tap((res) => {
        this.rebate = res
        // console.log('Rebate: ', this.rebate)
      })
    )
  }

  getAll(): Observable<RebateExtended[]> {
    let urlTemp = this.urlRebates + 'extended_all'
    return this.http.get<RebateExtended[]>(this.urlRebates).pipe(
      tap((res) => {
        this.rebates = res
        // console.log('Rebates: ', this.rebates)
      })
    )
  }

  getOne(id: any): Observable<RebateExtended> {
    let urlTemp = this.urlRebates + id + '/extended'
    return this.http.get<RebateExtended>(urlTemp).pipe(
      tap((res) => {
        this.rebateExtended = res
        // console.log('Rebate: ', this.rebateExtended)
      })
    )
  }

  update(id: any, body: any): Observable<Rebate> {
    let urlTemp = this.urlRebates + id + '/'
    return this.http.patch<Rebate>(urlTemp, body).pipe(
      tap((res) => {
        this.rebate = res
        // console.log('Rebate', this.rebate)
      })
    )
  }

  filter(field: any): Observable<Rebate[]> {
    let urlTemp = this.urlRebates + '?' + field
    return this.http.get<Rebate[]>(urlTemp).pipe(
      tap((res) => {
        this.rebatesFiltered = res
        // console.log('Rebates', this.rebatesFiltered)
      })
    )
  }

  getYearlyStatistic(): Observable<any> {
    let urlTemp = this.urlRebates + 'get_yearly_statistic'
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        this.statistics = res
        // console.log('Rebate: ', this.statistics)
      })
    )
  }

  getMonthlyStatistic(): Observable<any> {
    let urlTemp = this.urlRebates + 'get_monthly_statistic'
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        this.statistics = res
        // console.log('Rebate: ', this.statistics)
      })
    )
  }

  getStatistic(): Observable<any> {
    let urlTemp = this.urlRebates + 'get_statistic'
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        this.statistics = res
        // console.log('Rebate: ', this.statistics)
      })
    )
  }

}
