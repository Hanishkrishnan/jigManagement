import { Component } from '@angular/core';
import {FormBuilder,ReactiveFormsModule} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  standalone:true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  [x: string]: any;

  loginForm: any;
  userLogin : any;
  message : string = '';

  constructor(private fb:FormBuilder,
              private router:Router, 
              private auth : AuthService, 
              private route : ActivatedRoute){
    this.loginForm = this.fb.group({
      username:[''],
      password:[''],
      rememberMe:[false]
    });
  }

    // with backend login
  // login(){
  //   this.auth.login(this.loginForm.value).subscribe((res:any)=>{
  //     this.auth.saveToken(res.token);
  //     this.router.navigate(['/dashboard']);
  //   })
  // }

  // with mock login
  login(){
    // find() will return a first match 
    this.message = ''
    if(this.loginForm.value.username == '' && this.loginForm.value.password == ''){
    this.message = 'Please Enter Username and Password';
    }
    else if(this.loginForm.value.username == ''){
    this.message = 'Please Enter Username';
    }
    else if(this.loginForm.value.password == ''){
      this.message = 'Please Enter Password';
    }
    else{

      const user = this.auth.login(this.loginForm.value.username,this.loginForm.value.password,
                                this.loginForm.value.rememberMe);
    if(user){
      this.message = 'Login Success';
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/dashboard';
      this.router.navigateByUrl(returnUrl);
    }
    else{
      this.message = 'Incorrect Username or Password'
      return
    }
    }
  }

  loginusinglocalstorage(){
    // store username and return whether a non-empty username was provided
    localStorage.setItem("username", this.userLogin);
    
  }
}
