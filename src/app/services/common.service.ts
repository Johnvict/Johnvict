import { FormGroup } from '@angular/forms';
import { NotificationService } from './notification.service';
import { storageKeys } from './../models/app.variables';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
	providedIn: 'root'
})
export class CommonService {
	STORAGE_KEY = storageKeys;
	themeColor: 'dark' | 'light' | 'systemDefault' = localStorage.getItem('app-color-theme') as 'dark' | 'light' | 'systemDefault'; ;
	currentUrl;
	constructor(
		private notification: NotificationService,
	) {
	}

	saveTolocalStorage(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}
	getFromlocalStorage(key) {
		const data = localStorage.getItem(key);
		return data ? JSON.parse(data) : null;
	}

	formatContact(phonenumber) {
		const removeSpace = (phone) => {
			for (let i = 0; i <= phone.length; i++) {
				phone = phone.replace(' ', '');
				phone = phone.replace('-', '');
			}
			return phone;
		};
		if (phonenumber.length > 0) {
			let phone = phonenumber[0] ? phonenumber[0].value : phonenumber[1] ? phonenumber[1].value : '';
			phone = phone.slice(0, 4) === '+234' ? phone.replace('+234', '0') : phone;
			return removeSpace(phone);
		}
	}

	// async openContacts() {
	// 	return await this.contacts.pickContact()
	// 		.then(contact => this.formatContact(contact.phoneNumbers))
	// 		.catch(e => this.notification.showToast('Error reading contact'));
	// }

	emailError(form: FormGroup) {
		if (form.get('email').hasError('required')) {
			return 'Please enter your email';
		}
		return form.get('email').hasError('pattern') ? 'Invalid email' : '';
	}
	getPhoneError(form: FormGroup) {
		if (form.get('phone').hasError('required')) {
			return 'Please enter your phone number';
		}
		return form.get('phone').hasError('pattern') ? 'Invalid phone number' : '';
	}
	getNameError(form: FormGroup) {
		if (form.get('name').hasError('required')) {
			return 'Please enter your name';
		}
		return form.get('name').hasError('length') ? 'Please enter a valid name' : '';
	}
	getPasswordError(form: FormGroup) {
		if (!form.value.password && !form.value.cpassword) {
			form.markAsDirty();
			return
		};
		
		if (form.get('password').hasError('required')) {
			form.markAsDirty();
			return 'Please create password';
		}
	}
	getCPasswordError(form: FormGroup, error) {
		error.cpassword = null;
		if (!form.value.password && !form.value.cpassword) {
			return
		};
		
		if (form.get('password').hasError('required') || form.get('cpassword').hasError('required')) {
			return 'Please create password';
		}
		console.log("isPasswordEqual", form.value.password == form.value.cpassword);
		if (form.value.password !== form.value.cpassword) {
			error.cpassword = 'passwords do not match';
		}
	}
	
}
