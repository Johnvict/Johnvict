export interface UserPersona {
	full_name?: string;
	short_name?: string;
	first_name?: string;
	middle_name?: string;
	last_name?: string;
	profile_picture_url?: string;
	brief?: string;
	about?: string;
	profession: string;
	email: string;
	phone: string;
	github?: string;
	twitter?: string;
	linkedin?: string;
	facebook?: string;
	instagram?: string;
	current_city?: string;
	current_country?: string;
	nationality?: string;
	total_years_of_experience?: number;
	dob?: Date;
	show_age?: boolean;
	education?: Education[];
	tools: ToolsIUse[];
	hobbies?: string[];
}

export interface Education {
	id: number;
	started_at: Date;
	graduated_at?: Date;
	school_name: string
	school_type: "college" | "bachelor\'s degree" | "msc" | "diploma" | "master" | "secondary",
	certificate_earned?: string;
	programme?: string;
}

export interface ToolsIUse {
	name: string;
	since_when: Date;
	expertise: "beginner" | "intermediate" | "expert",
	type?: string;
}