import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {SecondappComponent} from "./secondapp/secondapp.component";
import {LoginGuard} from "./login/gard/login.guard";
import {AuthGuard} from "./login/gard/auth.guard"; // CLI imports router

const routes: Routes = [
  { path: 'admin', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate:[LoginGuard]},
  { path: 'disconnect/:error_message', component: LoginComponent, canActivate:[LoginGuard] },
  { path: 'second', component: SecondappComponent, canActivate:[AuthGuard] },
  { path: '',   redirectTo: '/second', pathMatch: 'full' },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
