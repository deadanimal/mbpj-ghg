import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { House } from './houses.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  public housesUrl: string = environment.baseUrl + 'v1/houses/'
  public retrievedHouses: House[] = []
  public retrievedApplicantHouses: House[] = []
  public retrievedFilteredHouses: House[] = []

  public condominium: House[] = []
  public flat: House[] = []
  public apartment: House[] = []
  public bungalowSemi: House[] = []
  public terrace: House[] = []
  public townhouse: House[] = []
  public otherHouse: House [] = []
  
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getAll(): Observable<House[]> {
    this.condominium = []
    this.flat = []
    this.townhouse = []
    this.terrace = []
    this.bungalowSemi = []
    this.apartment = []
    this.otherHouse = []

    return this.http.get<House[]>(this.housesUrl).pipe(
      tap((res) => {
        this.retrievedHouses = res
        console.log('Houses: ', this.retrievedHouses)
        this.retrievedHouses.forEach(
          (house) => {
            if (house.building_type == 'CD') {
              this.condominium.push(house)
            }
            else if (house.building_type == 'FL') {
              this.flat.push(house)
            }
            else if (house.building_type == 'TO') {
              this.townhouse.push(house)
            }
            else if (house.building_type == 'TE') {
              this.terrace.push(house)
            }
            else if (house.building_type == 'BS') {
              this.bungalowSemi.push(house)
            }
            else if (house.building_type == 'AS') {
              this.apartment.push(house)
            }
            else if (house.building_type == 'OT') {
              this.otherHouse.push(house)
            }
          }
        )
      })
    )
  }

  reigster(body: Form): Observable<any> {
    return this.http.post<any>(this.housesUrl,body).pipe(
      tap((res) => {
        console.log(res)
      })
    )
  }

  update(body: Form, currentHouseID: string): Observable<any> {
    console.log('House ID: ', currentHouseID)
    let updateHouseUrl = this.housesUrl + currentHouseID + '/'
    return this.http.put<any>(updateHouseUrl, body).pipe(
      tap((res) => {
        console.log(res)
      })
    )
  }

  filter(filterField): Observable<any> {
    let filterUrl = this.housesUrl + '?' + filterField + '/'
    return this.http.get<House[]>(filterUrl).pipe(
      tap((res) => {
        this.retrievedFilteredHouses = res
        console.log('Filtered houses: ', this.retrievedFilteredHouses)
      })
    )
  }

}


/*

  doRetrieveAllApplicantHouses(): Observable<House[]>{
    let applicantHousesUrl = this.housesUrl + '?applicant=' + this.authService.userID
    return this.http.get<House[]>(applicantHousesUrl).pipe(
      tap((res) => {
        this.retrievedApplicantHouses = res
        console.log('Applicant houses: ', this.retrievedApplicantHouses)
      })
    )
  }

*/