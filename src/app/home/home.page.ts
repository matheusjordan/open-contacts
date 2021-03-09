import { Component } from '@angular/core';
import { Contact } from '../shared/models/contact';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contacts: Contact[] = [
    { name: 'Matheus Jordan', number: '83988534639'},
    { name: 'Bom dia e Cia', number: '40028922'},
    { name: 'Mae', number: '83988523929'}
  ];

  constructor() {}

}
