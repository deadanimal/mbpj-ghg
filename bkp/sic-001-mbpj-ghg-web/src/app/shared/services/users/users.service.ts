import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./users.model";
import { Form } from "@angular/forms";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map, tap, catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  public urlUser: string = environment.baseUrl + "v1/users/";
  public users: User[] = [];
  public usersFiltered: User[] = [];
  public userStatistics: any;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUser).pipe(
      tap((res) => {
        this.users = res;
        // console.log('Users: ', this.users)
      })
    );
  }

  createEvaluator(body: Form): Observable<any> {
    return this.http.post<any>(this.authService.urlRegister, body).pipe(
      tap((res) => {
        let postBody: {
          user_type: "EV";
        };
        // console.log('Registration response: ', res)
        return this.http
          .put<any>(this.urlUser + res.user.pk + "/", postBody)
          .subscribe(
            () => {
              // console.log("Change to evaluator successful");
            },
            (err) => {
              // console.log("Change to evaluator unsuccessful:", err);
            }
          );
      })
    );
  }

  filter(filterField): Observable<any> {
    let filterUrl = environment.baseUrl + "v1/users?" + filterField;
    return this.http.get<User[]>(filterUrl).pipe(
      tap((res) => {
        this.usersFiltered = res;
        // console.log("Filtered users: ", this.usersFiltered);
      })
    );
  }

  update(body: Form, id): Observable<any> {
    let updateUserUrl = this.urlUser + id + "/";
    return this.http.put<any>(updateUserUrl, body).pipe(
      tap((res) => {
        // console.log('Updated user: ', res)
      })
    );
  }

  delete(id: string): Observable<any> {
    let urlDelete = this.urlUser + id + "/";
    return this.http.delete<any>(urlDelete).pipe(
      tap((res) => {
        // console.log("Deleted user: ", res);
      })
    );
  }

  getStatistics(): Observable<any> {
    let urlTemp = this.urlUser + "get_total_user";
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        this.userStatistics = res;
      })
    );
  }
}
