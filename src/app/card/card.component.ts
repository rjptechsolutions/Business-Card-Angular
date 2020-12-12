import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faDatabase,
  faSync,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() user;

  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;
  faSync = faSync;

  constructor() {}

  ngOnInit(): void {}

  clicked() {
    window.location.reload();
  }
}
