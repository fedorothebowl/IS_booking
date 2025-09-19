import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-date-date-picker',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateDatePickerComponent),
      multi: true
    }
  ],
  templateUrl: './date-date-picker.html',
  styleUrls: ['./date-date-picker.sass']
})
export class DateDatePickerComponent implements ControlValueAccessor {

  // Imposta data odierna (ora gestita dal form control)
  data: Date = new Date();

  // Imposta ora odierna nel formato HH:MM
  ora: string = (() => {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    return `${h}:${m}`;
  })();

  // ControlValueAccessor callbacks
  private onChange = (value: any) => {};
  private onTouched = () => {};

  // Chiamato quando la data cambia
  onDataChange(newData: Date | null) {
    this.data = newData || new Date();
    this.onChange(this.data);
    this.onTouched();
  }

  // Chiamato quando l'ora cambia
  onOraChange(newOra: string) {
    this.ora = newOra;
    this.onTouched();
  }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    if (value) {
      this.data = new Date(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}