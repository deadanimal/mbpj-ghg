import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { House } from './houses.model';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  // URL
  public urlHouses: string = environment.baseUrl + 'v1/houses/'

  // Data
  public house: House
  public houses: House[] = []
  public housesFiltered: House[] = []
  public houseStatistics: any

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form): Observable<House> {
    return this.http.post<any>(this.urlHouses, body).pipe(
      tap((res) => {
        this.house = res
        console.log('House: ', this.house)
      })
    )
  }

  getAll(): Observable<House[]> {
    return this.http.get<House[]>(this.urlHouses).pipe(
      tap((res) => {
        this.houses = res
        console.log('Houses: ', this.houses)
      })
    )
  }

  getOne(id: String): Observable<House> {
    let urlTemp = this.urlHouses + id + '/'
    return this.http.get<House>(urlTemp).pipe(
      tap((res) => {
        this.house = res
        console.log('House: ', this.house)
      })
    )
  }

  update(id: String, body: Form): Observable<House> {
    let urlTemp = this.urlHouses + id + '/'
    return this.http.put<House>(urlTemp, body).pipe(
      tap((res) => {
        this.house = res
        console.log('House', this.house)
      })
    )
  }

  filter(field: String): Observable<House[]> {
    let urlTemp = this.urlHouses + '?' + field
    return this.http.get<House[]>(urlTemp).pipe(
      tap((res) => {
        this.housesFiltered = res
        console.log('Houses', this.housesFiltered)
      })
    )
  }

  activate(id: String): Observable<House> {
    let urlTemp = this.urlHouses + id + '/activate/'
    return this.http.get<House>(urlTemp).pipe(
      tap((res) => {
        this.house = res
        console.log('House: ', this.house)
      })
    )
  }

  deactivate(id: String): Observable<House> {
    let urlTemp = this.urlHouses + id + '/deactivate/'
    return this.http.get<House>(urlTemp).pipe(
      tap((res) => {
        this.house = res
        console.log('House: ', this.house)
      })
    )
  }

  getStatistics(): Observable<any> {
    let urlTemp = this.urlHouses + 'get_total_building_type/'
    return this.http.get<House>(urlTemp).pipe(
      tap((res) => {
        this.houseStatistics = res
        console.log('House: ', this.houseStatistics)
      })
    )
  }

}
