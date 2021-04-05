import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Notification } from './notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  // Url
  public urlNotifications: string = environment.baseUrl + 'v1/notifications/'
  public urlNotificationsExtended: string = environment.baseUrl + 'v1/notifications/extended/'
  
  // Data
  public notification: Notification
  public notifications: Notification[] = []
  public notificationsExtended: Notification[] = []
  public notificationsFiltered: Notification[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: any) {
    return this.http.post<Notification>(this.urlNotifications, body).pipe(
      tap((res) => {
        // console.log('Notification: ', res)
      })
    )
  }

  get() {
    return this.http.get<Notification[]>(this.urlNotificationsExtended).pipe(
      tap((res: Notification[]) => {
        this.notifications = res
        // console.log('Notifications: ', res)
      })
    )
  }

}
