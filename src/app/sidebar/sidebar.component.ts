import { Component } from '@angular/core';
import {AdminService} from "../../api/admin.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private auth: AdminService) {
  }
  logout(){
    this.auth.deconnecter();
  }
}
