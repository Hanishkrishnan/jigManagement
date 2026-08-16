import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Login {

  isloggedIn(){
    const username  = localStorage.getItem('username');
    return !! username;
  }
}
