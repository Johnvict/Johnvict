import { NgModule } from '@angular/core';
// import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, } from '@angular/material/input';
@NgModule({
	imports: [
		MatInputModule,
		MatStepperModule,
		MatFormFieldModule,
	],
	exports: [
		MatInputModule,
		MatStepperModule,
		MatFormFieldModule,
	]
})

export class MaterialModule { }
