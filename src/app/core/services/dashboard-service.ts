import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  api='http://localhost:8080/api/dashboard';

constructor(private http:HttpClient){}

       getDashboard(){
        return this.http.get(this.api);
      }

}
