import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrganisationType } from './organisation-types.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrganisationTypesService {

  public organisationTypesUrl: string = environment.baseUrl + 'v1/organisation-types/'
  public retrievedOrganisationTypes: OrganisationType[] = []

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

  doRetrieveAllOrganisationTypes(): Observable<OrganisationType[]> {
    let headers = this.createHeader()
    return this.http.get<OrganisationType[]>(this.organisationTypesUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedOrganisationTypes = res
        // console.log('Organisation types: ', this.retrievedOrganisationTypes)
      }),
      catchError(this.handleError)
    )
  }

  doCreateOrganisationType(credentials: Form): Observable<any> {
    let headers = this.createHeader()
    return this.http.post<any>(this.organisationTypesUrl, credentials, {headers: headers}).pipe(
      tap((res) => {
        // console.log('Create organisation type: ', res)
      }),
      catchError(this.handleError)
    )
  }

}
