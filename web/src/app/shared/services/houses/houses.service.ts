import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { House, HouseExtended } from './houses.model';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  // URL
  public urlHouses: string = environment.baseUrl + 'v1/houses/'

  // Data
  public house: House
  public houses: HouseExtended[] = []
  public housesFiltered: House[] = []
  public houseStatistics: any

  public houseExtended: HouseExtended

  constructor(
    private http: HttpClient
  ) { }

  create(body: any): Observable<House> {
    return this.http.post<any>(this.urlHouses, body).pipe(
      tap((res) => {
        this.house = res
        console.log('House: ', this.house)
      })
    )
  }

  getAll(): Observable<HouseExtended[]> {
    let urlTemp = this.urlHouses + 'extended_all/'
    return this.http.get<HouseExtended[]>(urlTemp).pipe(
      tap((res) => {
        this.houses = res
        console.log('Houses: ', this.houses)
      })
    )
  }

  getOne(id: any): Observable<HouseExtended> {
    let urlTemp = this.urlHouses + id + '/extended'
    return this.http.get<HouseExtended>(urlTemp).pipe(
      tap((res) => {
        this.houseExtended = res
        // console.log('House: ', this.houseExtended)
      })
    )
  }

  update(id: any, body: any): Observable<House> {
    let urlTemp = this.urlHouses + id + '/'
    return this.http.put<House>(urlTemp, body).pipe(
      tap((res) => {
        this.house = res
        console.log('House', this.house)
      })
    )
  }

  filter(field: any): Observable<House[]> {
    let urlTemp = this.urlHouses + '?' + field
    return this.http.get<House[]>(urlTemp).pipe(
      tap((res) => {
        this.housesFiltered = res
        console.log('Houses', this.housesFiltered)
      })
    )
  }

  activate(id: any): Observable<HouseExtended> {
    let urlTemp = this.urlHouses + id + '/activate/'
    return this.http.get<HouseExtended>(urlTemp).pipe(
      tap((res) => {
        this.houseExtended = res
        console.log('House: ', this.houseExtended)
      })
    )
  }

  deactivate(id: any): Observable<HouseExtended> {
    let urlTemp = this.urlHouses + id + '/deactivate/'
    return this.http.get<HouseExtended>(urlTemp).pipe(
      tap((res) => {
        this.houseExtended = res
        console.log('House: ', this.houseExtended)
      })
    )
  }

  getStatistics(): Observable<any> {
    let urlTemp = this.urlHouses + 'get_total_building_type/'
    return this.http.get<House>(urlTemp).pipe(
      tap((res) => {
        this.houseStatistics = res
        // console.log('House: ', this.houseStatistics)
      })
    )
  }
  
  getOwnerHouses(body: any): Observable<any> {
    let urlTemp = this.urlHouses + 'get_owner_houses/'
    return this.http.post<House>(urlTemp, body).pipe(
      tap((res) => {
        this.houses = res
        // console.log('House: ', this.houseStatistics)
      })
    )
  }

}
