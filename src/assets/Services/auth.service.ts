import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated(){
    if (localStorage.getItem("login") === null) {
      return false;
    }
    else {
      return true;
    }
  }
}


