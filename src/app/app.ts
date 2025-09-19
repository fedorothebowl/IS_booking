import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header/header';
import { SelectComponent } from './inputs/select/select';
import { DateDatePickerComponent } from './inputs/date-date-picker/date-date-picker';
import { NumericComponent } from './inputs/numeric/numeric';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    DateDatePickerComponent,
    SelectComponent,
    NumericComponent,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.sass'],
})

export class App {

  showPopup = signal(false);
  private _snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    date: [new Date(), Validators.required],
    freightOrder: ['', Validators.required],
    loadingCode: ['', Validators.required],
    loadingDesc: ['', Validators.required],
    customer: ['', Validators.required],
    destination: ['', Validators.required],
    carrier: [''],
    product: ['', Validators.required],
    quantity: ['', Validators.required],
    um: ['', Validators.required],
    batch: ['', Validators.required],
  });

  save() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.openSnackBar('Form saved successfully!', 'Close', 'success');
    this.reset();
    } else {
      this.openSnackBar('Please fill all required fields', 'Close', 'error');
    }
  }

  openSnackBar(message: string, action: string, type: 'success' | 'error' = 'success') {
    const panelClass = type === 'success' ? ['snack-success'] : ['snack-error'];
    
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: panelClass,
    });
  }

  reset(){
    this.form.reset({
      date: new Date(), // qui ricarichi la data attuale
      freightOrder: '',
      loadingCode: '',
      loadingDesc: '',
      customer: '',
      destination: '',
      carrier: '',
      product: '',
      quantity: '',
      um: '',
      batch: ''
    });
  }


}
