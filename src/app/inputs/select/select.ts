import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  templateUrl: './select.html',
  styleUrls: ['./select.sass']
})
export class SelectComponent implements ControlValueAccessor {
  @Input() label: string = 'Select';         // Label dinamico
  @Input() options: string[] = [];           // Opzioni dinamiche
  @Input() required: boolean = false;
  
  selectedValue: string = '';                // Valore selezionato
  
  // ControlValueAccessor callbacks
  private onChange = (value: any) => {};
  private onTouched = () => {};

  // Chiamato quando il valore cambia nella select
  onSelectionChange(value: string) {
    this.selectedValue = value;
    this.onChange(value);
    this.onTouched();
  }

  // Chiamato quando la select perde il focus
  onBlur() {
    this.onTouched();
  }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    this.selectedValue = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Implementa se hai bisogno di disabilitare il componente
  }
}