import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import {MainComponent} from "./pages/main/main.component";
import {RegisterComponent} from "./pages/auth/register/register.component";
import {
  UnauthorizedGuardService,
  UserGuardService
} from "./service/auth/guard/authorized-guard-service.service";
import {UserMainPageComponent} from "./pages/users/main-page/user-main-page.component";
import {MyActivityComponent} from "./pages/users/my-activity/my-activity.component";
import {NewActivityComponent} from "./pages/users/new-activity/new-activity.component";
import {StatsComponent} from "./pages/users/stats/stats.component";
import {SomeActivityComponent} from "./pages/users/some-activity/some-activity.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent, canActivate: [UnauthorizedGuardService]},
  {path: 'register', component: RegisterComponent, canActivate: [UnauthorizedGuardService]},
  {path: 'user', component: UserMainPageComponent, canActivate: [UserGuardService]},
  {path: 'user/stats', component: StatsComponent, canActivate: [UserGuardService]},
  {path: 'user/activities', component: MyActivityComponent, canActivate: [UserGuardService]},
  {path: 'user/activities/new', component: NewActivityComponent, canActivate: [UserGuardService]},
  {path: 'user/activities/:id', component: SomeActivityComponent, canActivate: [UserGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
