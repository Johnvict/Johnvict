import { UserService } from './services/user.service';
import { UserPersona } from './models/interfaces';
import { Component } from '@angular/core';
@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	public appPages = [
		{ title: 'Welcome', url: '/', icon: 'home' },
		{ title: 'About', url: '/about', icon: 'person' },
		{ title: 'Works', url: '/works', icon: 'code-working' },
		{ title: 'Resumé', url: '/resume', icon: 'book' },
		{ title: 'Contact', url: '/contact', icon: 'call' },
	];
	user: UserPersona;
	public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
	constructor(public userService: UserService) {
		this.user = this.userService.userProfile;
	}

	callNumber(phoneNumber: any) {
		window.open(`tel:${phoneNumber}`, '_system');
	}
	
	  openUrl(url) {
		  window.open(`https://${url}`, '_system');
	  }
	
	  sendMail(email) {
		  window.open(`mailto:${email}`, '_system');
	  }
}
