import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AssessmentAspect } from "./assessment-aspects.model";
import { Form } from "@angular/forms";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map, tap, catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class AssessmentAspectsService {
  public assessmentAspectsUrl: string =
    environment.baseUrl + "v1/assessment-aspects/";
  public retrievedAssessmentAspects: AssessmentAspect[] = [];
  public retrievedFilteredAssessmentAspects: AssessmentAspect[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  private handleError(error: any) {
    console.log("error", error);
    return throwError(error);
  }

  doRetrieveAllAssessmentAspects(): Observable<AssessmentAspect[]> {
    return this.http.get<AssessmentAspect[]>(this.assessmentAspectsUrl).pipe(
      tap((res) => {
        this.retrievedAssessmentAspects = res;
        console.log("Assessment aspects: ", this.retrievedAssessmentAspects);
      }),
      catchError(this.handleError)
    );
  }

  doCreateAssessmentAspect(body: Form): Observable<any> {
    return this.http.post<any>(this.assessmentAspectsUrl, body).pipe(
      tap((res) => {
        console.log("Create assessment aspect response: ", res);
      }),
      catchError(this.handleError)
    );
  }

  doUpdateAssessmentAspect(body: Form, currentAssessmentAspect: string): Observable<any> {
    let urlUpdate = this.assessmentAspectsUrl + currentAssessmentAspect + '/'
    return this.http.put<any>(urlUpdate, body).pipe(
      tap((res) => {
        console.log("Update assessment aspect response: ", res);
      }),
      catchError(this.handleError)
    );
  }

  doDeleteAssessmentAspect(currentAssessmentAspect: string): Observable<any> {
    let urlDelete = this.assessmentAspectsUrl + currentAssessmentAspect + "/";
    return this.http.delete<any>(urlDelete).pipe(
      tap((res) => {
        console.log(res)
      })
    );
  }

  doRetrieveFilteredAssessmentAspects(filterField): Observable<any> {
    let filterUrl = this.assessmentAspectsUrl + "?" + filterField;
    return this.http.get<AssessmentAspect[]>(filterUrl).pipe(
      tap((res) => {
        this.retrievedFilteredAssessmentAspects = res;
        console.log(
          "Filtered assessment aspects: ",
          this.retrievedFilteredAssessmentAspects
        );
      }),
      catchError(this.handleError)
    );
  }
}
