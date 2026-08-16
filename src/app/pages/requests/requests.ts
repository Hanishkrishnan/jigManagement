import { Component, signal } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../../core/services/api-service';
import { Sidebar } from "../../layout/sidebar/sidebar";
import { DatePipe } from '@angular/common';
import { SidebarService } from '../../core/services/sidebar-service';

@Component({
  selector: 'app-requests',
  imports: [Sidebar,DatePipe],
  templateUrl: './requests.html',
  styleUrl: './requests.css',
})
export class Requests {

  id = signal<number | null>(null);
  individual_Request = signal<any | null>(null);
  units:any;

  constructor(private a_route : ActivatedRoute,
              private apiservice: ApiService,
              private router: Router,
              private sidebarservice : SidebarService){

  }

  ngOnInit(){
    this.a_route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id.set(idParam ? Number(idParam) : null);

      this.getRequestData();

    });
  }

  getRequestData(){
   
    const currentId = this.id();
      if (currentId !== null) {
        this.apiservice.getRequestDataByID(currentId).subscribe(data=>{
          this.individual_Request.set(data);
          this.units = Array.from({ length: this.individual_Request().quantity }, (_, i) => i + 1);
          console.log(data);
        });
      }
  }

  redirectToAllRequest(){
    this.router.navigate(['/dashboard']);
    this.sidebarservice.setView('requests');
  }
}
