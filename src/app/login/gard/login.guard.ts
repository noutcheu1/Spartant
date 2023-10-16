import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {AdminService} from "src/api/admin.service";
import {Injectable} from "@angular/core";


@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router:Router, private auth:AdminService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
   let user = JSON.parse(sessionStorage.getItem('users') || '{}');
   let auth:AdminService
   if(this.auth.estConnecte()){
         this.router.navigate(['/second']).then();
        return false;
   }
   return true;
  }
}
