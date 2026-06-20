import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { JigService } from '../../core/services/jig-service';
import { Sidebar } from '../../layout/sidebar/sidebar';

@Component({
  selector: 'app-jig-form',
  imports: [ReactiveFormsModule,Sidebar],
  standalone:true,
  templateUrl: './jig-form.html',
  styleUrls: ['./jig-form.css'],
})
export class JigForm {
  jigForm : any;

  constructor(private jfb: FormBuilder, private jigService: JigService) {
  }

  save(){
    
  }
}
