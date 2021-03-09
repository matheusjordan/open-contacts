import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactDataComponent } from './components/contact-data/contact-data.component';



@NgModule({
  declarations: [
    ContactCardComponent,
    ContactDataComponent
  ],
  exports: [
    ContactCardComponent,
    ContactDataComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
