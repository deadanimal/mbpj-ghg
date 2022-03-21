import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Advertisement } from './advertisement.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  public adsUrl: string = environment.baseUrl + 'v1/advertisement/'
  public retrievedAdvertisements: Advertisement[] = []

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private handleError(error: any) {
    console.log('error', error);
    return throwError(error);
  }

  doRetrieveAllAdvertisements(): Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>(this.adsUrl).pipe(
      tap((res) => {
        this.retrievedAdvertisements = res
        // console.log('Advertisements: ', this.retrievedAdvertisements)
      }),
      catchError(this.handleError)
    )
  }

  doCreateAdvertisement(body): Observable<any> {
    return this.http.post<any>(this.adsUrl,body).pipe(
      tap((res) => {
        // console.log(res)
      }),
      catchError(this.handleError)
    )
  }

  doUpdateAdvertisement(body, id): Observable<any> {
    let updateAdsUrl = this.adsUrl + id + "/";
    return this.http.put<any>(updateAdsUrl, body).pipe(
      tap((res) => {
      })
    );
  }

  doDeleteAdvertisement(currentAdvertisement: string): Observable<any> {
    let urlDelete = this.adsUrl + currentAdvertisement + "/";
    return this.http.delete<any>(urlDelete).pipe(
      tap((res) => {
        // console.log(res)
      })
    );
  }

  

}
