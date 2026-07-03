import { HttpClient} from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class JigService {

  constructor(private http: HttpClient){

  }

  orders = signal<any[]>([]);

  PLATFORM_ID = inject(PLATFORM_ID)

  loadOrders() {
    

    if(isPlatformBrowser(this.PLATFORM_ID)){
       const data = localStorage.getItem('orderDetails');
       if (data && data !== 'undefined') {
           this.orders.set(JSON.parse(data));
         }
    }

    
  }
  addOrder(order:any){
    this.orders.update(current => [...current, order]);
    localStorage.setItem('orderDetails',JSON.stringify(this.orders()));
  }

  getProduct(){
   return this.http.get('http://localhost:8080/products')
  }
}
