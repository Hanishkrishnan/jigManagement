import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../core/services/sidebar-service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

 constructor(public sidebarService : SidebarService){

 }

  showDashboard(){
    this.sidebarService.setView('dashboard');
  }
  showRequests(){
    this.sidebarService.setView('requests')
  }

  
}
