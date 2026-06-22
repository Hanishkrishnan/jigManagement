import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { Navbar } from "../../layout/navbar/navbar";
import { JigService } from '../../core/services/jig-service';

@Component({
  selector: 'app-dashboard',
  imports: [Sidebar, CommonModule,Navbar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  newOrders=4;
  visitors=2500;
  totalsales=15000;
  orderDetails = signal<any>(null);
  constructor(private router:Router,public jigService:JigService){

  }

  redirect(screen:any){
      this.router.navigate([`/${screen}`]);
  }
  orders = [

{
 user:'John Doe',
 date:'01-10-2021',
 status:'Completed'
},

{
 user:'John Doe',
 date:'01-10-2021',
 status:'Pending'
},

{
 user:'John Doe',
 date:'01-10-2021',
 status:'Process'
},

{
 user:'John Doe',
 date:'01-10-2021',
 status:'Completed'
}

];


}
