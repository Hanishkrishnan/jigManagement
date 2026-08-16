import { Component } from '@angular/core';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { Navbar } from '../../layout/navbar/navbar';
import { ApiService } from '../../core/services/api-service';
import { Drawing } from '../../models/drawing';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drawing-component',
  imports: [Sidebar,Navbar,CommonModule],
  templateUrl: './drawing-component.html',
  styleUrl: './drawing-component.css',
})
export class DrawingComponent {

  drawingRequest: Drawing | undefined;

  constructor(private apiservice : ApiService){
  }

   getAllDrawingData(){
      this.apiservice.getDrawingData().subscribe({
        next: (data) => {
          this.drawingRequest = data;
        },
        error:(err)=>{

        }
      })
   }
}
