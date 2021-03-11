import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ContactDataComponent } from './components/contact-data/contact-data.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { FormsModule } from '@angular/forms';



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
    IonicModule,
    FormsModule
  ],
  providers: [
    CallNumber,
    SocialSharing
  ]
})
export class SharedModule { }
