import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Media } from './medias.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MediasService {

  public mediasUrl: string = environment.baseUrl + 'v1/medias/'
  public retrievedMedias: Media[] = []

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

  doRetrieveAllMedias(): Observable<Media[]> {
    let headers = this.createHeader()
    return this.http.get<Media[]>(this.mediasUrl, {headers: headers}).pipe(
      tap((res) => {
        this.retrievedMedias = res
        console.log('Medias: ', this.retrievedMedias)
      }),
      catchError(this.handleError)
    )
  }

  doCreateMedia(credentials: Form): Observable<any> {
    let headers = this.createHeader()
    return this.http.post<any>(this.mediasUrl, credentials, {headers: headers}).pipe(
      tap((res) => {
        console.log('Create media: ', res)
      }),
      catchError(this.handleError)
    )
  }

}
