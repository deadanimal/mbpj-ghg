import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Application } from './applications.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  // URL
  private urlApplication: string = environment.baseUrl + 'v1/applications/'
  private urlApplicationExtended: string = environment.baseUrl + 'v1/applications/extended/'

  // Data
  public application: Application
  public applicationExtended: Application
  public applications: Application[] = []
  public applicationsExtended: Application[] = []
  public applicationsFiltered: Application[] = []
  public statistics: any

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form) {
    return this.http.post<Application>(this.urlApplication, body).pipe(
      tap((res) => {
        console.log('Application: ', res)
      })
    )
  }

  getAll() {
    return this.http.get<Application[]>(this.urlApplication).pipe(
      tap((res: Application[]) => {
        this.applications = res
        console.log('Application: ', this. applications)
      })
    )
  }

  getAllExtended() {
    return this.http.get<Application[]>(this.urlApplicationExtended).pipe(
      tap((res: Application[]) => {
        this.applicationsExtended = res
        console.log('Application: ', this. applicationsExtended)
      })
    )
  }

  getSingle(id: string) {
    let urlTemp = this.urlApplication + id + '/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        this.application = res
        console.log('Application: ', this.application)
      })
    )
  }

  getStatistics() {
    let urlTemp = this.urlApplication + 'statistics/'
    return this.http.get<any>(urlTemp).pipe(
      tap((res: any) => {
        this.statistics = res
        console.log('Stats: ', this.statistics)
      })
    )
  }

  getSingleExtended(id: string) {
    let urlTemp = this.urlApplicationExtended + id + '/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        this.applicationExtended = res
        console.log('Application: ', this.applicationExtended)
      })
    )
  }

  update(id: string) {
    let urlTemp = this.urlApplication + id + '/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        this.application = res
        console.log('Application: ', this.application)
      })
    )
  }

  filter(field: string) {
    let urlTemp = this.urlApplicationExtended + '?' + field + '/'
    return this.http.get<Application[]>(urlTemp).pipe(
      tap((res: Application[]) => {
        this.applicationsFiltered = res
        console.log('Application: ', this.applicationsFiltered)
      })
    )
  }
  
  draft(id: string) {
    let urlTemp = this.urlApplication + id + '/draft/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        console.log('Application: ', res)
      })
    )
  }

  submit(id: string) {
    let urlTemp = this.urlApplication + id + '/submit/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        console.log('Application: ', res)
      })
    )
  }

  evaluate(id: string) {
    let urlTemp = this.urlApplication + id + '/evaluate/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        console.log('Application: ', res)
      })
    )
  }


  getOne(id: String): Observable<Application> {
    let urlTemp = this.urlApplication + id + '/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res) => {
        this.application = res
        console.log('Application: ', this.application)
      })
    )
  }

  
  
  approve(id: string) {
    let urlTemp = this.urlApplication + id + '/approved/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res) => {
        this.application = res
        console.log('Application: ', this.application)
      })
    )
  }

  complete(id: string) {
    let urlTemp = this.urlApplication + id + '/completed/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res) => {
        this.application = res
        console.log('Application: ', this.application)
      })
    )
  }

  pay(id: string) {
    let urlTemp = this.urlApplication + id + '/paid/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res) => {
        this.application = res
        console.log('Application: ', this.application)
      })
    )
  }


  reject(id: string) {
    let urlTemp = this.urlApplication + id + '/rejected/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res) => {
        this.application = res
        console.log('Application: ', this.application)
      })
    )
  }


}
