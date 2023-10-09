import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(uname : string,pword : string){
    if (uname === 'client' && pword === 'user123') {
      return 1;
    } else {
      return 0;
    }
  }
}
