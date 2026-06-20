import { Component } from '@angular/core';
import {FormBuilder,ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  standalone:true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm: any;

  constructor(private fb:FormBuilder,private router:Router, private auth : AuthService){
    this.loginForm = this.fb.group({
      username:[''],
      password:['']
    });
  }

  login(){
    this.auth.login(this.loginForm.value).subscribe((res:any)=>{
      this.auth.saveToken(res.token);
      this.router.navigate(['/dashboard']);
    })
  }
}
