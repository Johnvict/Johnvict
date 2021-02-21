import { CommonService } from './common.service';
import { ApplicationRef, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ThemingService {
	currentTheme: 'light' | 'dark' | 'systemDefault' = 'light';
	renderer: Renderer2;

	constructor(
		private ref: ApplicationRef,
		private commonService: CommonService,
		rendererFactory: RendererFactory2
		) {
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	changeTheme(theme: string) {
		//
	}

	setTheme(themeValue = null) {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
		// ? Change the them
		const toggleDarkTheme = (themeToAdd) => {
			// this.themeForMaterial.next(themeToAdd === 'light' ? 'light-theme' : 'dark-theme');
			this.renderer.setAttribute(document.body, 'color-theme', themeToAdd);
			this.ref.tick();
		};

		// ? Check for system default color theme
		const checkForSystemDefault = () => {
			// console.log('SAVE:: systemDefault');
			localStorage.setItem(this.commonService.STORAGE_KEY.appTheme, 'systemDefault');

			//  ? set the theme
			toggleDarkTheme(prefersDark.matches ? 'dark' : 'light');
			this.commonService.themeColor = prefersDark.matches ? 'dark' : 'light';
			
			// ? Listen for changes to the prefers-color-scheme media query
			prefersDark.addEventListener('change', (mediaQuery) => {
				if (this.currentTheme === 'systemDefault') {
					toggleDarkTheme(mediaQuery.matches ? 'dark' : 'light');
					this.commonService.themeColor = prefersDark.matches ? 'dark' : 'light';
				}
			});
		};

		// ? A new color theme is sent
		if (themeValue) {
			this.currentTheme = themeValue;
			if (themeValue === 'systemDefault') {
				return checkForSystemDefault();
			}
			this.renderer.setAttribute(document.body, 'color-theme', themeValue);
			// console.log('SAVE::', themeValue);
			localStorage.setItem(this.commonService.STORAGE_KEY.appTheme, themeValue);
			this.commonService.themeColor = themeValue;
		} else {
			let theme = localStorage.getItem(this.commonService.STORAGE_KEY.appTheme);
			if (theme) {
				if (theme === 'systemDefault') {
					return checkForSystemDefault();
				}
			} else {
				theme = 'light';
				// console.log('SAVE:: light');
				localStorage.setItem(this.commonService.STORAGE_KEY.appTheme, 'light');
			}
			toggleDarkTheme(theme);
			this.currentTheme = theme as 'light' | 'dark' | 'systemDefault';
			console.log(this.currentTheme);
		}
	}
}
