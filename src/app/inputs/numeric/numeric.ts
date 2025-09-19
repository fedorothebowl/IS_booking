import { Component, Input } from '@angular/core';
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-numeric',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './numeric.html',
  styleUrls: ['./numeric.sass']
})
export class NumericComponent {
  @Input() label: string = '';
}
