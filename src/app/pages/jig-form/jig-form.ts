import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JigService } from '../../core/services/jig-service';
import { Sidebar } from '../../layout/sidebar/sidebar';

@Component({
  selector: 'app-jig-form',
  standalone:true,
  imports: [ReactiveFormsModule,Sidebar], 
  templateUrl: './jig-form.html',
  styleUrls: ['./jig-form.css'],
})
export class JigForm {
  jigForm = new FormGroup({
    projectName: new FormControl('', Validators.required),
    partName: new FormControl('', Validators.required),
    quantity   : new FormControl('', Validators.required)
  });

  constructor(private jfb: FormBuilder, private jigService: JigService) {
  }

  ngOnInit(){
    this.jigService.loadOrders();
  }

  create(){

    if(this.jigForm.valid){
    this.jigService.addOrder(this.jigForm.value);
    console.log(this.jigForm.value);
    }
    this.reset();
  }

  reset(){
     this.jigForm.reset({
      projectName: '',
      partName: '',
      quantity: ''
    });
  }
}
