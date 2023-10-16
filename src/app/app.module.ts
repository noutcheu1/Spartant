import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {AppRoutingModule} from "./AppRoutingModule";
import {DashModule} from "./dashboard/dash.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecondappComponent } from './secondapp/secondapp.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    SecondappComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DashModule,
        FormsModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
