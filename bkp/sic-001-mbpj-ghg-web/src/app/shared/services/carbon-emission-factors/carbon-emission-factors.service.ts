import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CarbonEmissionFactor } from "./carbon-emission-factors.model";
import { Form } from "@angular/forms";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map, tap, catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class CarbonEmissionFactorsService {
  public carbonEmissionFactorsUrl: string =
    environment.baseUrl + "v1/carbon-emission-factors/";
  public retrievedCarbonEmissionFactors: CarbonEmissionFactor[] = [];
  public retrievedFilteredCarbonEmissionFactors: CarbonEmissionFactor[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  private handleError(error: any) {
    console.log("error", error);
    return throwError(error);
  }

  doRetrieveAllCarbonEmissionFactors(): Observable<CarbonEmissionFactor[]> {
    return this.http.get<CarbonEmissionFactor[]>(this.carbonEmissionFactorsUrl).pipe(
      tap((res) => {
        this.retrievedCarbonEmissionFactors = res;
        // console.log("Carbon emission factors: ", this.retrievedCarbonEmissionFactors);
      }),
      catchError(this.handleError)
    );
  }

  doCreateCarbonEmissionFactor(body: Form): Observable<any> {
    return this.http.post<any>(this.carbonEmissionFactorsUrl, body).pipe(
      tap((res) => {
        // console.log("Create carbon emission factor response: ", res);
      }),
      catchError(this.handleError)
    );
  }

  doUpdateCarbonEmissionFactor(body: Form, currentCarbonEmissionFactor: string): Observable<any> {
    let urlUpdate = this.carbonEmissionFactorsUrl + currentCarbonEmissionFactor + '/'
    return this.http.put<any>(urlUpdate, body).pipe(
      tap((res) => {
        // console.log("Update carbon emission factor response: ", res);
      }),
      catchError(this.handleError)
    );
  }

  doDeleteCarbonEmissionFactor(currentCarbonEmissionFactor: string): Observable<any> {
    let urlDelete = this.carbonEmissionFactorsUrl + currentCarbonEmissionFactor + "/";
    return this.http.delete<any>(urlDelete).pipe(
      tap((res) => {
        // console.log(res)
      })
    );
  }

  doRetrieveFilteredCarbonEmissionFactors(filterField): Observable<any> {
    let filterUrl = this.carbonEmissionFactorsUrl + "?" + filterField;
    return this.http.get<CarbonEmissionFactor[]>(filterUrl).pipe(
      tap((res) => {
        this.retrievedFilteredCarbonEmissionFactors = res;
        // console.log("Filtered carbon emission factors: ", this.retrievedFilteredCarbonEmissionFactors);
      }),
      catchError(this.handleError)
    );
  }
}
