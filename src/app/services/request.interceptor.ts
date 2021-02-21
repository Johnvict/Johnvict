import { NavController } from '@ionic/angular';
import { CommonService } from './common.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { NotificationService } from './notification.service';
import { RequestService } from './request.service';

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
	loader;
	requestUrl;
	constructor(
		private common: CommonService,
		private navCtrl: NavController,
		private requests: RequestService,
		private notification: NotificationService,
		@Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number
	) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.requestUrl = request.url.substr(request.url.lastIndexOf('/') + 1);
		request = request.clone({
			setHeaders: {
				'content-type': 'application/json',
				Accept: 'application/json'
			}
		});

		// const token = this.common.getFromLocalStorage(this.common.storageKeys.token, true);
		// if (token) {
		// 	request = request.clone({
		// 		setHeaders: {
		// 			Authorization: token
		// 			// Authorization: atob(profile.token)
		// 		}
		// 	});
		// }
		const timeoutValue = request.headers.get('timeout') || this.defaultTimeout;

		const timeoutValueNumeric = Number(timeoutValue);
		let timer = 0;
		timer += 1;

		if (!window.navigator.onLine) {
			// return throwError(this.manageError({ error: 'Internet is required.', status: 222 }));
			return throwError(this.manageError({ type: 'server-side', message: 'Please check your internet connection and try again' }));
		} else {
			return next.handle(request).pipe(timeout(timeoutValueNumeric), map((event: HttpEvent<any>) => {
				const inter = setInterval(() => {
					timer += 1;
					if (timer === 30) {
						timer = 0;
						clearInterval(inter);
					}
				}, 1000);
				if (event instanceof HttpResponse) {
					if (timer >= 30) {
						this.notification.showToast('Request timed out!');
						throw(new Error('Request timed out! Check your network and try again'));
					}
					clearInterval(inter);
				}
				return event;
			}),
				catchError((error: HttpErrorResponse) => {
					console.log(error);
					if (error.error instanceof ErrorEvent) {
						this.manageError({ type: 'client-side', message: error.message });
						return throwError(this.manageError({ type: 'server-side', message: error.error.message }));
					} else {
						if (error.status === 401) {
							if (error.error.message === 'invalid credential' || error.error.status === -1) {
								return throwError(this.manageError({ type: 'server-side', message: 'Session expired. Please Login' }, true));
							} else {
								// this.auth.login();
							}
						}
						else if (error.status === 0) {
							return throwError(this.manageError({ type: 'client-side', message: 'Please check your internet connection and try again' }));
						} else {
							return throwError(this.manageError({type: 'timeout', message: 'Request timeout. Please try again'}));
						}
					}
				})
			);
		}
	}

	manageError(error: { type: string, message: string }, show = true, retry?) {
		return error;
		// if (show) {
		// 	this.notification.showAlert({ message: error.message, header: 'Error Occured!' });
		// }
	}
}
