import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../../core/services/api-service';

@Component({
  selector: 'app-new-request-dialog',
  standalone:true,
  imports: [MatDialogModule, 
            ɵInternalFormsSharedModule,
            ReactiveFormsModule, 
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule],
  templateUrl: './new-request-dialog.html',
  styleUrl: './new-request-dialog.css',
})
export class NewRequestDialog {
  requestForm!: FormGroup;

  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<NewRequestDialog>, private apiservice: ApiService) {
    this.requestForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      quantity: [1]
    });
  }
  submit(){
    this.apiservice.addNewRequest(this.requestForm.value).subscribe({
      next:(res)=>{
        this.apiservice.addRequest(res)
        this.dialogRef.close(true);
      },
      error(err) {
        console.log(err);
      },
    })
      
  }
  close(){
    this.dialogRef.close();
  }
}
