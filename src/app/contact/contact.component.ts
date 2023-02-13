import { Component } from '@angular/core';
import { faLocationDot, faPhone, faEnvelope, faPerson } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  faLocationDot = faLocationDot;
  faPhone = faPhone; 
  faEnvelope = faEnvelope; 
  faPerson = faPerson; 

}
