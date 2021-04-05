import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User, UserExtended } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // URL
  public urlUser: string = environment.baseUrl + 'v1/users/'

  // Data
  public user: User
  public users: User[] = []
  public usersFiltered: User[] = []
  public userStatistics: any

  public self: User
  public userExtended: UserExtended

  public evaluators: UserExtended[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form): Observable<User> {
    return this.http.post<any>(this.urlUser, body).pipe(
      tap((res) => {
        this.user = res
        // console.log('User: ', this.user)
      })
    )
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUser).pipe(
      tap((res) => {
        this.users = res
        // console.log('Users: ', this.users)
      })
    )
  }

  getOne(id: any): Observable<UserExtended> {
    let urlTemp = this.urlUser + id + '/extended'
    return this.http.get<UserExtended>(urlTemp).pipe(
      tap((res) => {
        this.userExtended = res
        // console.log('User: ', this.userExtended)
      })
    )
  }

  getSelf(): Observable<User> {
    let urlTemp = this.urlUser + 'get_self'
    return this.http.get<User>(urlTemp).pipe(
      tap((res) => {
        this.self = res
        // console.log('User: ', this.self)
      })
    )
  }

  patch(id: any, body: any): Observable<User> {
    let urlTemp = this.urlUser + id + '/'
    return this.http.patch<User>(urlTemp, body).pipe(
      tap((res) => {
        this.user = res
        // console.log('User', this.user)
      })
    )
  }

  filter(field: any): Observable<User[]> {
    let urlTemp = this.urlUser + '?' + field
    return this.http.get<User[]>(urlTemp).pipe(
      tap((res) => {
        this.usersFiltered = res
        // console.log('Users', this.usersFiltered)
      })
    )
  }

  activate(id: any): Observable<UserExtended> {
    let urlTemp = this.urlUser + id + '/activate'
    return this.http.get<UserExtended>(urlTemp).pipe(
      tap((res) => {
        this.userExtended = res
        // console.log('User: ', this.userExtended)
      })
    )
  }

  deactivate(id: any): Observable<UserExtended> {
    let urlTemp = this.urlUser + id + '/deactivate'
    return this.http.get<UserExtended>(urlTemp).pipe(
      tap((res) => {
        this.userExtended = res
        // console.log('User: ', this.userExtended)
      })
    )
  }

  getStatistics(): Observable<any> {
    let urlTemp = this.urlUser + 'get_total_user'
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        this.userStatistics = res
      })
    )
  }

  getEvaluators(): Observable<UserExtended[]> {
    let urlTemp = this.urlUser + 'get_evaluators'
    return this.http.get<UserExtended[]>(urlTemp).pipe(
      tap((res) => {
        this.evaluators = res
      })
    )
  }

}
