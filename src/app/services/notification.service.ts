import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AlertType } from './../interfaces/app-structs';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {

	constructor(
		public alertController: AlertController,
		private toastCtrl: ToastController,
		private loadingCtrl: LoadingController,
	) { }

	async showAlert(data: AlertType) {
		const alert = await this.alertController.create({
			cssClass: data.cssClass,
			header: data.header,
			message: data.message,
			buttons: !data.button || data.button.length === 0 ? [{ text: 'Ok' }] : data.button
		});
		await alert.present();
	}

	async showToast(message, duration = 5000, color = 'light') {
		const toast = await this.toastCtrl.create({
			message,
			animated: true,
			duration,
			mode: 'ios',
			color
		});
		toast.present();
	}

	async showLoading(message?) {
		const loader = await this.loadingCtrl.create({
			message,
			animated: true,
			mode: 'ios'
		});
		return loader;
	}

}
