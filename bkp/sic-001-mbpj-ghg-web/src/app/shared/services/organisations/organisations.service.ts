import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Organisation } from './organisations.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrganisationsService {

  public organisationsUrl: string = environment.baseUrl + 'v1/organisations/'
  public retrievedOrganisations: Organisation[] = []

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  createHeader() {
    if (this.authService.tokenAccess){
      let headers = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Authorization': 'Bearer ' + this.authService.tokenAccess
        }
      )
      return headers
    }
    else {
      let headers = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        }
      )
      return headers
    }
  }

  private handleError(error: any) {
    console.log('error', error);
    return throwError(error);
  }

  doRetrieveAllOrganisations(): Observable<Organisation[]> {
    let headers = this.createHeader()
    return this.http.get<Organisation[]>(this.organisationsUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedOrganisations = res
        // console.log('Organisations: ', this.retrievedOrganisations)
      }),
      catchError(this.handleError)
    )
  }

  doCreateOrganisation(credentials: Form): Observable<any> {
    let headers = this.createHeader()
    return this.http.post<any>(this.organisationsUrl, credentials, {headers: headers}).pipe(
      tap((res) => {
        // console.log('Create organisation: ', res)
      }),
      catchError(this.handleError)
    )
  }

}
