import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { DateDatePicker } from "./inputs/date-date-picker/date-date-picker"; // <-- import nominato

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DateDatePicker],
  templateUrl: './app.html',
  styleUrls: ['./app.sass']
})

export class App {
  protected readonly title = signal('booking');
}
