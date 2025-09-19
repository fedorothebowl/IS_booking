import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  templateUrl: './select.html',
  styleUrls: ['./select.sass']
})
export class SelectComponent {
  @Input() label: string = 'Select';         // Label dinamico
  @Input() options: string[] = [];           // Opzioni dinamiche
  @Input() required:boolean = false;
  selectedValue: string = '';                // Valore selezionato
}
