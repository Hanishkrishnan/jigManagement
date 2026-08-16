import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../core/services/auth-service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  private authservice = inject(AuthService);
  private router = inject(Router);

  logout(){
    this.authservice.logout();
    this.router.navigate(['/login']);
    //localStorage.removeItem('username');
   // console.log(localStorage.getItem('username'));
  }
}
