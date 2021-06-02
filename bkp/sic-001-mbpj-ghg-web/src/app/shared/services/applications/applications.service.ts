import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Application } from "./applications.model";
import { Form } from "@angular/forms";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map, tap, catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class ApplicationsService {
  public applicationsUrl: string = environment.baseUrl + "v1/applications/";
  public retrievedApplications: Application[] = [];
  public retrievedFilteredApplications: Application[] = [];

  public barangNakDelete: Application[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  private handleError(error: any) {
    console.log("error", error);
    return throwError(error);
  }

  doRetrieveAllApplications(): Observable<Application[]> {
    //let newApplicationUrl = this.applicationsUrl + '?ordering=-date_submitted'
    return this.http.get<Application[]>(this.applicationsUrl).pipe(
      tap((res) => {
        this.retrievedApplications = res;
        console.log("Applications: ", this.retrievedApplications);
      }),
      catchError(this.handleError)
    );
  }

  doRetrieveAllExtendedApplications(): Observable<any> {
    return this.http.get<any>(this.applicationsUrl + "extended/").pipe(
      tap((res) => {
        this.retrievedApplications = res;
        console.log("Applications: ", this.retrievedApplications);
      }),
      catchError(this.handleError)
    );
  }

  retrieveFilteredApplications(filterField): Observable<any> {
    let filterUrl = environment.baseUrl + "v1/applications?" + filterField;
    return this.http.get<Application[]>(filterUrl).pipe(
      tap((res) => {
        this.retrievedFilteredApplications = res;
        console.log(
          "Filtered applications: ",
          this.retrievedFilteredApplications
        );
      }),
      catchError(this.handleError)
    );
  }

  doAssignEvaluator(body, appID): Observable<any> {
    let assignEvaluatorUrl = this.applicationsUrl + appID + "/";
    return this.http.put<any>(assignEvaluatorUrl, body).pipe(
      tap((res) => {
        console.log("Assign evaluator response: ", res);
      }),
      catchError(this.handleError)
    );
  }

  doChangeStatus(body, appID): Observable<any> {
    let changeStatusUrl = this.applicationsUrl + appID + "/";
    return this.http.put<any>(changeStatusUrl, body).pipe(
      tap((res) => {
        console.log("Channge status response: ", res);
      }),
      catchError(this.handleError)
    );
  }

  doDeleteScript(id): Observable<any> {
    return this.http.delete<any>(this.applicationsUrl + id + "/").pipe(
      tap((res) => {}),
      catchError(this.handleError)
    );
  }

  doRetrieveTotalAppReceivedSince2011(): Observable<any> {
    let url = this.applicationsUrl + "get_total_app_received_since_2011";
    return this.http.get<any>(url).pipe(
      tap((res) => {}),
      catchError(this.handleError)
    );
  }

  doRetrieveTotalAppReceivedCurrentYear(): Observable<any> {
    let url = this.applicationsUrl + "get_total_app_received_current_year";
    return this.http.get<any>(url).pipe(
      tap((res) => {}),
      catchError(this.handleError)
    );
  }

  doRetrieveTotalAppApprovedSince2011(): Observable<any> {
    let url = this.applicationsUrl + "get_total_app_approved_since_2011";
    return this.http.get<any>(url).pipe(
      tap((res) => {}),
      catchError(this.handleError)
    );
  }

  doRetrieveTotalAppApprovedCurrentYear(): Observable<any> {
    let url = this.applicationsUrl + "get_total_app_approved_current_year";
    return this.http.get<any>(url).pipe(
      tap((res) => {}),
      catchError(this.handleError)
    );
  }
}
