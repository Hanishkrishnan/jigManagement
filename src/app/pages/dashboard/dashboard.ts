import { HttpClient } from '@angular/common/http';
import { Component, Output, signal } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { JigService } from '../../core/services/jig-service';
import { SidebarService } from '../../core/services/sidebar-service';
import {MatDialog} from '@angular/material/dialog';
import { NewRequestDialog } from '../new-request-dialog/new-request-dialog';
import { ApiService } from '../../core/services/api-service';
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  newOrders=4;
  visitors=2500;
  totalsales=15000;
  orderDetails = signal<any>(null);
  redirectfrom = 'dashboard';


  constructor(private router:Router,
              public jigService:JigService,
              public sidebarService : SidebarService,
              private matdialog : MatDialog,
              public apiservice : ApiService,
              public authService : AuthService
              ){

  }

  ngOnInit(){
   this.getProductDetails();
  }

  openDialog(){
   const dialog =  this.matdialog.open(NewRequestDialog,{
    width: '420px',
    maxWidth: '95vw',
    panelClass: 'request-dialog',
    autoFocus: false,
    restoreFocus: false
   })
   dialog.afterClosed().subscribe(result =>{
    if(result){
     console.log(result);
    }
    
   })
  }
 getProductDetails(){
    this.apiservice.getRequestData().subscribe(data => {
      this.apiservice.request.set(data as any);
    });
  }
  

  redirect(screen:any){
      this.router.navigate([`/${screen}`]);
  }

  openRequest(id:number){
    this.router.navigate(['requests',id]);
  }



}
