import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  selectedView = signal('dashboard');

  setView(view:string){
    this.selectedView.set(view);
  }
}
