import { TwinButtonComponent } from './twinbutton/twinbutton.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TwinButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [TwinButtonComponent]
})
export class ComponentsModule { }
