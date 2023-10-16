import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
})
export class CalenderComponent {
  selected: Date | null | undefined ;
}
