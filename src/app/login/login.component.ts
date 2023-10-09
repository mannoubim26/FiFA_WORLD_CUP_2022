import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username ='';
  password= '';
  errorMsg ='';
  
  constructor(private auth: AuthService, private router: Router ){

  }

  login(){
    if (this.username.trim().length === 0) {
      this.errorMsg = "user name is required !";
    }
    else if (this.password.trim().length === 0) {
      this.errorMsg = "password is required !";
    }else{
      this.errorMsg ="";
      let res = this.auth.login(this.username,this.password);
      if (res===1) {
        this.router.navigate(['app-staduims'])
      } else if(res === 0) {
        this.errorMsg ="Invalid User name or password";
      }
    }

  }
}
