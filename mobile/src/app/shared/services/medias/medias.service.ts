import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Form } from '@angular/forms';
import { Media } from './medias.model';

@Injectable({
  providedIn: 'root'
})
export class MediasService {

  // URL
  private urlMedia: string = environment.baseUrl + 'v1/medias/'

  // Data
  public media: Media
  public medias: Media[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form) {
    return this.http.post<Media>(this.urlMedia, body).pipe(
      tap((res) => {
        this.media = res
        console.log('Media: ', this.media)
      })
    )
  }

  get(id: number) {
    let urlTemp = this.urlMedia + id
    return this.http.get<Media>(urlTemp).pipe(
      tap((res: Media) => {
        this.media = res
        console.log('Media: ', this.media)
      })
    )
  }

}
