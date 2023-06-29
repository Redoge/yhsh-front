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
import {MyActivityComponent} from "./pages/users/my-activity/my-activity.component";
import {NewActivityComponent} from "./pages/users/new-activity/new-activity.component";
import {StatsComponent} from "./pages/users/stats/stats.component";
import {SomeActivityComponent} from "./pages/users/some-activity/some-activity.component";
import {AdminPanelComponent} from "./pages/admin/admin-panel/admin-panel.component";
import {UserTableAdminComponent} from "./pages/admin/user-administation/user-table-admin.component";
import {UserProfilePageComponent} from "./pages/users/user-profile-page/user-profile-page.component";
import {UserPageAdminComponent} from "./pages/admin/user-page-admin/user-page-admin.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent, canActivate: [UnauthorizedGuardService]},
  {path: 'register', component: RegisterComponent, canActivate: [UnauthorizedGuardService]},

  {path: 'user', component: UserProfilePageComponent, canActivate: [UserGuardService]},
  {path: 'user/stats', component: StatsComponent, canActivate: [UserGuardService]},
  {path: 'user/activities', component: MyActivityComponent, canActivate: [UserGuardService]},
  {path: 'user/activities/new', component: NewActivityComponent, canActivate: [UserGuardService]},
  {path: 'user/activities/:id', component: SomeActivityComponent, canActivate: [UserGuardService]},

  {path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuardService]},
  {path: 'admin/users', component: UserTableAdminComponent, canActivate: [AdminGuardService]},
  {path: 'admin/users/:username', component: UserPageAdminComponent, canActivate: [AdminGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
