import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router, CanActivateFn,
} from '@angular/router';
import { Injectable } from '@angular/core';
import {AdminService} from "src/api/admin.service";



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private auth:AdminService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
   let user = JSON.parse(sessionStorage.getItem('users') || '{}');

   if(this.auth.estConnecte()){
        return true;
   }
    this.router.navigate(['/disconnect', "You must login to the system to access the page.!"]).then();
    return false;
  }
}
