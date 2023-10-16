import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from './calender/calender.component';
import { LinechartComponent } from './linechart/linechart.component';
import { GeochartComponent } from './geochart/geochart.component';
import { CirclechartComponent } from './circlechart/circlechart.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from "@angular/common/http";
import {LoginGuard} from "src/app/login/gard/login.guard";
import {AuthGuard} from "src/app/login/gard/auth.guard";

@NgModule({
  declarations: [

    LinechartComponent,
    GeochartComponent,
    CirclechartComponent
  ],
  exports: [
    LinechartComponent,
    GeochartComponent,
    CalenderComponent,
    CirclechartComponent
  ],
  imports: [
      CalenderComponent,
    CommonModule,
      MatNativeDateModule,
      HttpClientModule,
      MatCardModule,
      MatDatepickerModule
  ],
  providers: [
    AuthGuard,
      LoginGuard
  ]
})
export class DashModule {
  constructor() {


  }
}
