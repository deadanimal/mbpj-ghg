import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Rebate } from "./rebates.model";
import { Form } from "@angular/forms";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map, tap, catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RebatesService {
  public rebatesUrl: string = environment.baseUrl + "v1/rebates/";
  public retrievedRebates: Rebate[] = [];
  public retrievedFilteredRebates: Rebate[] = [];

  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    console.log("error", error);
    return throwError(error);
  }

  doRetrieveAllRebates(): Observable<Rebate[]> {
    return this.http.get<Rebate[]>(this.rebatesUrl).pipe(
      tap((res) => {
        this.retrievedRebates = res;
        console.log("Rebates: ", this.retrievedRebates);
      }),
      catchError(this.handleError)
    );
  }

  doRetrieveAllExtendedRebates(): Observable<any> {
    return this.http.get<any>(this.rebatesUrl + 'extended/').pipe(
      tap((res) => {
        this.retrievedRebates = res
        console.log('Rebates: ', this.retrievedRebates)
      }),
      catchError(this.handleError)
    )
  }

  doCreateRebate(body: Form): Observable<any> {
    return this.http.post<any>(this.rebatesUrl, body).pipe(
      tap((res) => {
        console.log("Create rebate: ", res);
      }),
      catchError(this.handleError)
    );
  }

  doUpdateRebate(body: Form, currentRebate: string): Observable<any> {
    let urlUpdate = this.rebatesUrl + currentRebate + "/";
    return this.http.put<any>(urlUpdate, body).pipe(
      tap((res) => {
        console.log("Update rebate response: ", res);
      }),
      catchError(this.handleError)
    );
  }

  doDeleteRebate(currentRebate: string): Observable<any> {
    let urlDelete = this.rebatesUrl + currentRebate + "/";
    return this.http.delete<any>(urlDelete).pipe(
      tap((res) => {
        console.log(res);
      })
    );
  }

  doRetrieveFilteredRebates(filterField): Observable<any> {
    let filterUrl = this.rebatesUrl + "?" + filterField;
    return this.http.get<Rebate[]>(filterUrl).pipe(
      tap((res) => {
        this.retrievedFilteredRebates = res;
        console.log("Filtered rebates: ", this.retrievedFilteredRebates);
      }),
      catchError(this.handleError)
    );
  }
}
