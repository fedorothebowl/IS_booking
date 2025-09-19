import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-numeric',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumericComponent),
      multi: true
    }
  ],
  templateUrl: './numeric.html',
  styleUrls: ['./numeric.sass']
})
export class NumericComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() required: boolean = false;

  // Valore interno del componente
  value: number | null = null;
  
  // ControlValueAccessor callbacks
  private onChange = (value: any) => {};
  private onTouched = () => {};

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const numValue = target.value ? +target.value : null;
    this.value = numValue;
    this.onChange(numValue);
  }

  onBlur() {
    this.onTouched();
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // setDisabledState(isDisabled: boolean): void {
  //   // Implementa se hai bisogno di disabilitare il componente
  // }
}