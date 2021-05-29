import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EvaluationSchedule } from "./evaluation-schedules.model";
import { Form } from "@angular/forms";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map, tap, catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class EvaluationSchedulesService {
  public evaluationSchedulesUrl: string =
    environment.baseUrl + "v1/evaluation-schedules/";
  public retrievedEvaluationSchedules: EvaluationSchedule[] = [];
  public retrievedFilteredEvaluationSchedules: EvaluationSchedule[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  createHeader() {
    if (this.authService.tokenAccess) {
      let headers = new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: "Bearer " + this.authService.tokenAccess,
      });
      return headers;
    } else {
      let headers = new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "*/*",
      });
      return headers;
    }
  }

  private handleError(error: any) {
    console.log("error", error);
    return throwError(error);
  }

  doRetrieveAllEvaluationSchedules(): Observable<EvaluationSchedule[]> {
    let headers = this.createHeader();
    return this.http
      .get<EvaluationSchedule[]>(this.evaluationSchedulesUrl, {
        headers: headers,
      })
      .pipe(
        tap((res) => {
          this.retrievedEvaluationSchedules = res;
          console.log(
            "Evaluation schedules: ",
            this.retrievedEvaluationSchedules
          );
        }),
        catchError(this.handleError)
      );
  }

  doCreateEvaluationSchedule(credentials: Form): Observable<any> {
    let headers = this.createHeader();
    return this.http
      .post<any>(this.evaluationSchedulesUrl, credentials, { headers: headers })
      .pipe(
        tap((res) => {
          console.log("Create evaluation schedule response: ", res);
        }),
        catchError(this.handleError)
      );
  }

  doRetrieveFilteredEvaluationSchedules(filterField): Observable<any> {
    let headers = this.createHeader();
    let filterUrl = this.evaluationSchedulesUrl + "?" + filterField;
    return this.http
      .get<EvaluationSchedule[]>(filterUrl, { headers: headers })
      .pipe(
        tap((res) => {
          this.retrievedFilteredEvaluationSchedules = res;
          console.log(
            "Filtered evaluation schedules: ",
            this.retrievedFilteredEvaluationSchedules
          );
        }),
        catchError(this.handleError)
      );
  }
}
