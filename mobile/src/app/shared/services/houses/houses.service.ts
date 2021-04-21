import { Injectable } from '@angular/core';
import { House } from './houses.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  // URL
  private urlHouse: string = environment.baseUrl + 'v1/houses/'
  private urlHouseExtended: string = environment.baseUrl + 'v1/houses/extended/'

  // Data
  public house: House
  public houseExtended: House
  public houses: House[] = []
  public housesExtended: House[] = []
  public housesFiltered: House[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form) {
    return this.http.post<House>(this.urlHouse, body).pipe(
      tap((res) => {
        console.log('House: ', res)
      })
    )
  }

  getAll() {
    return this.http.get<House[]>(this.urlHouse).pipe(
      tap((res: House[]) => {
        this.houses = res
        console.log('House: ', this. houses)
      })
    )
  }

  getAllExtended() {
    return this.http.get<House[]>(this.urlHouseExtended).pipe(
      tap((res: House[]) => {
        this.housesExtended = res
        console.log('House: ', this. housesExtended)
      })
    )
  }

  getSingle(id: number) {
    let urlTemp = this.urlHouse + id + '/'
    return this.http.get<House>(urlTemp).pipe(
      tap((res: House) => {
        this.house = res
        console.log('House: ', this.house)
      })
    )
  }

  getSingleExtended(id: number) {
    let urlTemp = this.urlHouseExtended + id + '/'
    return this.http.get<House>(urlTemp).pipe(
      tap((res: House) => {
        this.houseExtended = res
        console.log('House: ', this.houseExtended)
      })
    )
  }

  update(id: number, body: Form) {
    let urlTemp = this.urlHouse + id + '/'
    return this.http.patch<House>(urlTemp, body).pipe(
      tap((res: House) => {
        this.house = res
        console.log('House: ', this.house)
      })
    )
  }

  filter(field: string) {
    let urlTemp = this.urlHouseExtended + '?' + field
    return this.http.get<House[]>(urlTemp).pipe(
      tap((res: House[]) => {
        this.housesFiltered = res
        console.log('House: ', this.housesFiltered )
      })
    )
  }

}
