import { Component, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../models/contact';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.scss'],
})
export class ContactDataComponent implements OnInit {
  @Input() contact: Contact;

  constructor(
    private socialSharing: SocialSharing
  ) { }

  ngOnInit() {}

  share() {
    const message = `${this.contact.name}\n${this.contact.number}`;

    this.socialSharing.share(message, 'Compartilhe contato utilizando')
      .catch(() => { console.log('Falha ao compartilhar contato') });
  }

  shareWhatsapp() {
    const helloMessage = 'Olá!';
    this.socialSharing.shareViaWhatsAppToPhone(this.contact.number, helloMessage, null)
      .catch(() => { console.log('Falha ao compartilhar contato via Whatsapp')});
  }

}
