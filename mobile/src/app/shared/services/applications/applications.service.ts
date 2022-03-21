import { Injectable } from '@angular/core';
import { Application } from './applications.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Form } from '@angular/forms';

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

  getSingle(id: number) {
    let urlTemp = this.urlApplication + id + '/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        this.application = res
        console.log('Application: ', this.application)
      })
    )
  }

  getSingleExtended(id: number) {
    let urlTemp = this.urlApplicationExtended + id + '/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        this.applicationExtended = res
        console.log('Application: ', this.applicationExtended)
      })
    )
  }

  update(id: number) {
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
  
  draft(id: number) {
    let urlTemp = this.urlApplication + id + '/draft/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        console.log('Application: ', res)
      })
    )
  }

  submit(id: number) {
    let urlTemp = this.urlApplication + id + '/submit/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        console.log('Application: ', res)
      })
    )
  }

  evaluate(id: number) {
    let urlTemp = this.urlApplication + id + '/evaluate/'
    return this.http.get<Application>(urlTemp).pipe(
      tap((res: Application) => {
        console.log('Application: ', res)
      })
    )
  }

  checkHouseApplication(id) {
    let urlTemp = this.urlApplication + `check_house_application_status?house_id=${id}`
    return this.http.get<any>(urlTemp).pipe(
      tap((res: any) => {
      })
    )
  }

}
