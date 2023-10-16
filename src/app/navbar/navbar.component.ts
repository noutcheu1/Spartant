import { Component } from '@angular/core';
import { faEnvelope, faGlobe, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    faEnvelope = faEnvelope ;
    faGlobe =  faGlobe;
    faBell = faBell;
    faUser = faUser;
    username = 'john Doe'
}
