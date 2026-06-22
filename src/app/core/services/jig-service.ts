import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JigService {

  orders = signal<any[]>([]);

  loadOrders() {
    const data = localStorage.getItem('orderDetails');

    if (data && data !== 'undefined') {
    this.orders.set(JSON.parse(data));
  }
  }
  addOrder(order:any){
    this.orders.update(current => [...current, order]);
    localStorage.setItem('orderDetails',JSON.stringify(this.orders()));
  }
}
