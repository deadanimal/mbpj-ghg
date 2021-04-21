import { Injectable, NgZone } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { JwtService } from '../handlers/jwt/jwt.service';
import { NotifyService } from '../handlers/notify/notify.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

    constructor(
        private jwtHandler: JwtService,
        private notificationHandler: NotifyService,
        private storage: NativeStorage
    ){ }

    private handleError(error: HttpErrorResponse) {
        let data = {}
        data = {
            reason: error && error.error.reason ? error.error.reason : '',
            status: error.status
        }
        if (error instanceof HttpErrorResponse) {
            // Server or connection error happened
            if (!navigator.onLine) {
                this.notificationHandler.openToastrConnection()
                // this.notificationHandler.openToastrConnection() <--
                // Handle offline error
            } else {
                // this.notificationHandler.openToastrError(error.statusText)
                // this.notificationHandler.openToastrHttp(error.status, error.statusText) <--
                // Handle Http Error (error.status === 403, 404...)
            }
        } else {
            // Handle Client Error (Angular Error, ReferenceError...)     
        }
        console.error('It happens: ', error);
        // console.log('Error: ', error)
        return throwError(error)
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('//...///')
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        };

        // Mobile
        // return from(this.storage.getItem('accessToken'))
        //     .pipe(
        //         switchMap(accessToken => {
        //             if (accessToken) {
        //                 headersConfig['Authorization'] = `Bearer ${accessToken}`; 
        //             }

        //             const request = req.clone({ setHeaders: headersConfig });

        //             // console.log('conf: ', headersConfig)

        //             return next.handle(request).pipe(
        //                 map((event: HttpEvent<any>) => {
        //                     if (event instanceof HttpResponse) {
        //                         // console.log('Event: ', event);
        //                     }
        //                     return event;
        //                 }),
        //                 catchError(this.handleError.bind(this))
        //             );
        //         })
        //     );

        // Web
        const token = this.jwtHandler.getToken('accessToken');

        if (token) {
            headersConfig['Authorization'] = `Bearer ${token}`;
            // console.log(headersConfig)
        }
        const request = req.clone({ setHeaders: headersConfig });
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // console.log('Event: ', event);
                }
                return event;
            }),
            catchError(this.handleError.bind(this))
        );
    }

}
