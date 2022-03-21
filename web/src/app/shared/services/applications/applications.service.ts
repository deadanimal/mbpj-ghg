import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Application, ApplicationExtended, ApplicationFiltered } from './applications.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  // URL
  private urlApplication: string = environment.baseUrl + 'v1/applications/'

  // Data
  public application: Application
  public applicationExtended: ApplicationExtended
  public applications: ApplicationExtended[] = []
  public applicationsFiltered: ApplicationFiltered
  public statistics: any
  public reportLink: any

  constructor(
    private http: HttpClient
  ) { }

  create(body: any) {
    return this.http.post<Application>(this.urlApplication, body).pipe(
      tap((res) => {
        // console.log('Application: ', res)
      })
    )
  }

  getAll() {
    let urlTemp = this.urlApplication + 'extended_all'
    return this.http.get<ApplicationExtended[]>(urlTemp).pipe(
      tap((res: ApplicationExtended[]) => {
        this.applications = res
        // console.log('Application: ', this. applications)
      })
    )
  }

  getOne(id: any) {
    let urlTemp = this.urlApplication + id + '/extended'
    return this.http.get<ApplicationExtended>(urlTemp).pipe(
      tap((res: ApplicationExtended) => {
        this.applicationExtended = res
        // console.log('Application: ', this.applicationExtended)
      })
    )
  }

  getStatistics() {
    let urlTemp = this.urlApplication + 'statistics/'
    return this.http.get<any>(urlTemp).pipe(
      tap((res: any) => {
        this.statistics = res
        // console.log('Stats: ', this.statistics)
      })
    )
  }

  update(id: any, body: any) {
    let urlTemp = this.urlApplication + id + '/'
    return this.http.patch<Application>(urlTemp, body).pipe(
      tap((res: Application) => {
        this.application = res
        // console.log('Application: ', this.application)
      })
    )
  }
  
  draft(id: any) {
    let urlTemp = this.urlApplication + id + '/drafted'
    return this.http.get<ApplicationExtended>(urlTemp).pipe(
      tap((res: ApplicationExtended) => {
        this.applicationExtended = res
        // console.log('Application: ', this.applicationExtended)
      })
    )
  }

  submit(id: any) {
    let urlTemp = this.urlApplication + id + '/submitted/'
    return this.http.get<ApplicationExtended>(urlTemp).pipe(
      tap((res: ApplicationExtended) => {
        this.applicationExtended = res
        // console.log('Application: ', this.applicationExtended)
      })
    )
  }

  evaluate(id: any) {
    let urlTemp = this.urlApplication + id + '/evaluation/'
    return this.http.get<ApplicationExtended>(urlTemp).pipe(
      tap((res: ApplicationExtended) => {
        this.applicationExtended = res
        // console.log('Application: ', this.applicationExtended)
      })
    )
  }
  
  approve(id: any) {
    let urlTemp = this.urlApplication + id + '/approved/'
    return this.http.get<ApplicationExtended>(urlTemp).pipe(
      tap((res: ApplicationExtended) => {
        this.applicationExtended = res
        // console.log('Application: ', this.applicationExtended)
      })
    )
  }

  progress(id: any) {
    let urlTemp = this.urlApplication + id + '/progress/'
    return this.http.get<ApplicationExtended>(urlTemp).pipe(
      tap((res: ApplicationExtended) => {
        this.applicationExtended = res
        // console.log('Application: ', this.applicationExtended)
      })
    )
  }

  complete(id: any) {
    let urlTemp = this.urlApplication + id + '/approved/'
    return this.http.get<ApplicationExtended>(urlTemp).pipe(
      tap((res: ApplicationExtended) => {
        this.applicationExtended = res
        // console.log('Application: ', this.applicationExtended)
      })
    )
  }

  pay(id: any) {
    let urlTemp = this.urlApplication + id + '/paid/'
    return this.http.get<ApplicationExtended>(urlTemp).pipe(
      tap((res: ApplicationExtended) => {
        this.applicationExtended = res
        // console.log('Application: ', this.applicationExtended)
      })
    )
  }

  reject(id: any) {
    let urlTemp = this.urlApplication + id + '/rejected/'
    return this.http.get<ApplicationExtended>(urlTemp).pipe(
      tap((res: ApplicationExtended) => {
        this.applicationExtended = res
        // console.log('Application: ', this.applicationExtended)
      })
    )
  }

  filter() {
    let urlTemp = this.urlApplication + 'filter_all'
    return this.http.get<ApplicationFiltered>(urlTemp).pipe(
      tap((res: ApplicationFiltered) => {
        this.applicationsFiltered = res
        // console.log('Application: ', this.applicationsFiltered)
      })
    )
  }

  getMonthlyStatistics() {
    let urlTemp = this.urlApplication + 'get_monthly_statistics'
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        this.statistics = res
        // console.log('Application: ', this.statistics)
      })
    )
  }

  getApplicationReport() {
    let urlTemp = this.urlApplication + 'report_application'
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        this.reportLink = res
        // console.log('Application: ', this.statistics)
      })
    )
  }

  getApprovedReport() {
    let urlTemp = this.urlApplication + 'report_approved'
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        this.reportLink = res
        // console.log('Application: ', this.statistics)
      })
    )
  }

  getBuildingReport() {
    let urlTemp = this.urlApplication + 'report_building'
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        this.reportLink = res
        // console.log('Application: ', this.statistics)
      })
    )
  }

  getTownReport() {
    let urlTemp = this.urlApplication + 'report_town'
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        this.reportLink = res
        // console.log('Application: ', this.statistics)
      })
    )
  }

  getReportStatistics() {
    let urlTemp = this.urlApplication + 'get_report_statistics/'
    return this.http.get<any>(urlTemp).pipe(
      tap((res: any) => {
        this.statistics = res
        console.log('Stats: ', this.statistics)
      })
    )
  }

  checkHouseApplication(id) {
    let urlTemp = this.urlApplication + `check_house_application_status?house_id=${id}`
    return this.http.get<any>(urlTemp).pipe(
      tap((res: any) => {
        console.log('Status: ', this.statistics)
      })
    )
  }

}
