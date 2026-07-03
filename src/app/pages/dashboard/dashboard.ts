import { HttpClient } from '@angular/common/http';
import { Component, Output, signal } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { Navbar } from "../../layout/navbar/navbar";
import { JigService } from '../../core/services/jig-service';
import { SidebarService } from '../../core/services/sidebar-service';
import {MatDialog} from '@angular/material/dialog';
import { NewRequestDialog } from '../new-request-dialog/new-request-dialog';
import { ApiService } from '../../core/services/api-service';

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
  redirectfrom = 'dashboard';


  constructor(private router:Router,
              public jigService:JigService,
              public sidebarService : SidebarService,
              private matdialog : MatDialog,
              public apiservice : ApiService
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
