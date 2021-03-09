import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactDataComponent } from './components/contact-data/contact-data.component';
import { IonicModule } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';



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
    CommonModule,
    IonicModule
  ],
  providers: [
    CallNumber
  ]
})
export class SharedModule { }
