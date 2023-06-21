import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import {MainComponent} from "./pages/main/main.component";
import {RegisterComponent} from "./pages/auth/register/register.component";
import {
  AdminGuardService,
  UnauthorizedGuardService,
  UserGuardService
} from "./service/auth/guard/authorized-guard-service.service";
import {UserMainPageComponent} from "./pages/users/main-page/user-main-page.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent, canActivate: [UnauthorizedGuardService]},
  {path: 'register', component: RegisterComponent, canActivate: [UnauthorizedGuardService]},
  {path: 'user', component: UserMainPageComponent, canActivate: [UserGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
