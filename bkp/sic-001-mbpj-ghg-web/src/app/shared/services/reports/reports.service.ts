import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Form } from "@angular/forms";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map, tap, catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class ReportsService {
  public reportsUrl: string = environment.baseUrl + "v1/reports/";

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

  doCreateReport(body): any {
    return this.http.post<any>(this.reportsUrl, body).pipe(
      tap((res) => {
        // console.log("Create report: ", res);
      }),
      catchError(this.handleError)
    );
  }

  getApplicationReport() {
    let headers = this.createHeader()
    let urlTemp = this.reportsUrl + "report_application";
    return this.http.get<any>(urlTemp, {headers: headers}).pipe(
      tap((res) => {
        // console.log('Application: ', res)
      })
    );
  }

  getApprovedReport() {
    let headers = this.createHeader()
    let urlTemp = this.reportsUrl + "report_approved";
    return this.http.get<any>(urlTemp, {headers: headers}).pipe(
      tap((res) => {
        // console.log('Approved: ', res)
      })
    );
  }

  getBuildingReport() {
    let headers = this.createHeader()
    let urlTemp = this.reportsUrl + "report_building";
    return this.http.get<any>(urlTemp, {headers: headers}).pipe(
      tap((res) => {
        // console.log('Building: ', res)
      })
    );
  }

  getTownReport() {
    let headers = this.createHeader()
    let urlTemp = this.reportsUrl + "report_town";
    return this.http.get<any>(urlTemp, {headers: headers}).pipe(
      tap((res) => {
        // console.log('Town: ', res)
      })
    );
  }

  getYearReport() {
    let headers = this.createHeader()
    let urlTemp = this.reportsUrl + "report_yearly";
    return this.http.get<any>(urlTemp, {headers: headers}).pipe(
      tap((res) => {
        // console.log('Town: ', res)
      })
    );
  }
}
