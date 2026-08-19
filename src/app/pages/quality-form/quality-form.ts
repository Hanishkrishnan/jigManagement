import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { QualityService } from '../../core/services/quality-service';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { Navbar } from '../../layout/navbar/navbar';

@Component({
  selector: 'app-quality-form',
  imports: [ReactiveFormsModule],
  standalone:true,
  templateUrl: './quality-form.html',
  styleUrl: './quality-form.css',
})
export class QualityForm {
  qualityForm : any;

  constructor(private qfb:FormBuilder, private qualityService : QualityService){}

  saveQuality(){
    
  }
}
