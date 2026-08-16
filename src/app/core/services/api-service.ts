import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Drawing } from '../../models/drawing';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  request = signal<any[]>([]);
  PLATFORM_ID = inject(PLATFORM_ID)

  constructor(private http: HttpClient){

  }

   loadRequest() {
    

    if(isPlatformBrowser(this.PLATFORM_ID)){
       const data = localStorage.getItem('orderDetails');
       if (data && data !== 'undefined') {
           this.request.set(JSON.parse(data));
         }
    }

    
  }

   addRequest(order:any){
    this.request.update(current => [...current, order]);
  }

  addNewRequest(request : any) : Observable<any>{
    return this.http.post<Request>('http://localhost:8080/requests',request);
  }


  getRequestData(){
   return this.http.get('http://localhost:8080/requests')
  }

  getRequestDataByID(id : number){
     return this.http.get<Request>(`http://localhost:8080/requests/${id}`)
  }

  getDrawingData(){
    return this.http.get<Drawing>('http://localhost:8080/drawing');
  }
}
