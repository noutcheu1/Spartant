import { Injectable } from '@angular/core';
import {Login} from "./model/login";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {LoginToken} from "./model/LoginToken";



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  baseurl:string = 'http://127.0.0.1:8000/api/v1';
  constructor(private http: HttpClient) { }

    login(adminDetail: Login): Observable<any>{

    const url = `${this.baseurl}/Login/signin/`;
      console.log(adminDetail.tojson())

    return this.http.post(
        url,
        adminDetail.tojson(),
        );

  }

  public estConnecte(){
    console.log(sessionStorage.getItem('users'))
    if(sessionStorage.getItem('users') == null){
      return false;
    }

    return  true;

  }
   public deconnecter(){

      localStorage.removeItem('users');
      sessionStorage.removeItem('users')
      //this.routes.navigate(['/login'])
    }

  public seConnecter(userInfo: LoginToken){
    sessionStorage.setItem('users', JSON.stringify(userInfo))
    localStorage.setItem('users',JSON.stringify(userInfo));
  }

}
