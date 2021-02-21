import { Observable } from 'rxjs';
import { UserPersona } from './../models/interfaces';
import { Injectable } from "@angular/core";



@Injectable({
	providedIn: 'root'
})
export class UserService {
	userProfile: UserPersona;
	me: Observable<UserPersona>;
	constructor(
	) {

		this.initializeProfile();
	}

	initializeProfile() {
		this.userProfile = {
			first_name: "Oluwadamilola",
			full_name: "Oluwadamilola Johnvict Olamibo",
			last_name: "Olamibo",
			middle_name: "Johnvict",
			short_name: "Johnvict",
			education: [
				{
					id: 1,
					school_name: "Aquinas College Akure",
					school_type: "secondary",
					started_at: new Date("2016"),
					certificate_earned: "Senior School Certificate Examination",
					graduated_at: new Date("2011"),
				},
				{
					id: 2,
					school_name: "Adekunle Ajasin University",
					school_type: "bachelor's degree",
					started_at: new Date("2014"),
					certificate_earned: "Bachelor of Science",
					graduated_at: new Date("2018"),
					programme: "Computer Science"
				}
			],
			email: "official.johnvict@gmail.com",
			phone: "+2347084677075",
			profession: "Software Developer",
			brief: "HI!\n \t\tAm Johnvict \n\n\t\tOluwadamilola Johnvict \n\t\t\tOlamibo",
			about: "Am Johnvict \nI delight in solving problems by writing codes.\n\tI do mobile and web development",
			tools: [
				{
					name: "JavaScript",
					expertise: "expert",
					since_when: new Date("2016-01-01"),
				},
				{
					name: "TypeScript",
					expertise: "expert",
					since_when: new Date("2016-01-01"),
				},
				{
					name: "PHP",
					expertise: "expert",
					since_when: new Date("2016-01-01"),
				},
				{
					name: "Laravel",
					expertise: "expert",
					since_when: new Date("2017-01-01"),
				},
				{
					name: "Lumen",
					expertise: "expert",
					since_when: new Date("2019-01-01"),
				},
				{
					name: "Node Js",
					expertise: "expert",
					since_when: new Date("2019-01-01"),
				},
				{
					name: "Angular",
					expertise: "expert",
					since_when: new Date("2017-01-01"),
				},
				{
					name: "Ionic",
					expertise: "expert",
					since_when: new Date("2017-01-01"),
				},
			],
			hobbies: ["PLaying Football", "Cooking", "Musical Instrument"],
			dob: new Date("1992-08-02"),
			current_city: "Abuja",
			current_country: "Nigeria",
			facebook: "Johnvict",
			github: "Johnvict",
			linkedin: "",
			twitter: "_johnvict",
			instagram: "_johnvict",
			nationality: "Nigerian",
			profile_picture_url: "/assets/images/johnvict.jpg",
			show_age: false,
			total_years_of_experience: 6,
		};
	}

	get user(): UserPersona {
		// this.userPersona.about = this.userProfile.about;
		return this.userProfile;
	}

	// set userPersona(user: UserPersona) {
	// 	this.userProfile = user;
	// }
}
