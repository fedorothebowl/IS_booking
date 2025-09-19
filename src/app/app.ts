import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


import { HeaderComponent } from './header/header';
import { SelectComponent } from './inputs/select/select';
import { DateDatePickerComponent } from "./inputs/date-date-picker/date-date-picker";
import { NumericComponent } from "./inputs/numeric/numeric";
import { PopupSaveComponent } from './popups/save/save';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DateDatePickerComponent, SelectComponent, NumericComponent, MatButtonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.sass']
})

export class App {
  showPopup = signal(false);
    private _snackBar = inject(MatSnackBar);

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    panelClass: ['snack-success'] // <- classe personalizzata
  });
}

}
