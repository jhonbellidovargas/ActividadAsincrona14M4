import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HijoComponent,
    PadreComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PadreComponent
  ]
})
export class PrincipalModule { }
