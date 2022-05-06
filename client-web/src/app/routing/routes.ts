import { Routes } from "@angular/router";
import { AUTHROUTES } from "../authentication/auth-routes";
import { HomeComponent } from "../pages/home/home.component";
import { WelcomeComponent } from "../pages/welcome/welcome.component";

export const ROUTES:Routes = [
  {path:'', redirectTo:'welcome', pathMatch:"full"},
  {path:'welcome', component: WelcomeComponent},
  {path: 'home',component: HomeComponent},
  ...AUTHROUTES,


]
