import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-twin-button',
	templateUrl: './twinbutton.component.html',
	styleUrls: ['./twinbutton.component.scss'],
})
export class TwinButtonComponent implements OnInit {
	@Input() left: {key: string, value: any};
	@Input() right: {key: string, value: any};

	@Output() valueSelected = new EventEmitter<string>();
	currentValue: any;
	constructor() { }

	changeValue(value: string) {
		this.currentValue = value;
		this.valueSelected.emit(value);
	}

	ngOnInit() {
		this.currentValue = this.left.value;
	}

}
