import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.scss'],
})
export class ContactDataComponent implements OnInit {
  @Input() contact: any;

  constructor() { }

  ngOnInit() {}

}
