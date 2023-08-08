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
import {MyActivityPageComponent} from "./pages/users/my-activity/my-activity-page.component";
import {NewActivityComponent} from "./pages/users/new-activity/new-activity.component";
import {StatsPageComponent} from "./pages/users/stats/stats-page.component";
import {SomeActivityComponent} from "./pages/users/some-activity/some-activity.component";
import {AdminPanelComponent} from "./pages/admin/admin-panel/admin-panel.component";
import {UserTableAdminComponent} from "./pages/admin/user-administation/user-table-admin.component";
import {UserProfilePageComponent} from "./pages/users/user-profile-page/user-profile-page.component";
import {UserPageAdminComponent} from "./pages/admin/user-page-admin/user-page-admin.component";
import {UserActivityAdminComponent} from "./pages/admin/user-activity-admin/user-activity-admin.component";
import {UserStatsAdminComponent} from "./pages/admin/user-stats-admin/user-stats-admin.component";
import {UserAllWorkoutsPageComponent} from "./pages/users/user-all-workouts-page/user-all-workouts-page.component";
import {NewWorkoutComponent} from "./pages/users/new-workout/new-workout.component";
import {SomeWorkoutPageComponent} from "./pages/users/some-workout-page/some-workout-page.component";
import {FriendsPageComponent} from "./pages/users/friends-page/friends-page.component";
import {FriendUserPageComponent} from "./pages/users/friend-user-page/friend-user-page.component";
import {
  ActivationEmailComponentComponent
} from "./components/activation-email-component/activation-email-component.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'email/activation', component: ActivationEmailComponentComponent},
  {path: 'login', component: LoginComponent, canActivate: [UnauthorizedGuardService]},
  {path: 'register', component: RegisterComponent, canActivate: [UnauthorizedGuardService]},

  {path: 'user', component: UserProfilePageComponent, canActivate: [UserGuardService]},
  {path: 'user/stats', component: StatsPageComponent, canActivate: [UserGuardService]},
  {path: 'user/activities', component: MyActivityPageComponent, canActivate: [UserGuardService]},
  {path: 'user/activities/new', component: NewActivityComponent, canActivate: [UserGuardService]},
  {path: 'user/activities/:id', component: SomeActivityComponent, canActivate: [UserGuardService]},
  {path: 'user/workouts', component: UserAllWorkoutsPageComponent, canActivate: [UserGuardService]},
  {path: 'user/workouts/new', component: NewWorkoutComponent, canActivate: [UserGuardService]},
  {path: 'user/workouts/:id', component: SomeWorkoutPageComponent, canActivate: [UserGuardService]},
  {path: 'user/:username/friends', component: FriendsPageComponent, canActivate: [UserGuardService]},


  {path: 'friends/:username', component: FriendUserPageComponent, canActivate: [UserGuardService]},


  {path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuardService]},
  {path: 'admin/users', component: UserTableAdminComponent, canActivate: [AdminGuardService]},
  {path: 'admin/users', component: UserTableAdminComponent, canActivate: [AdminGuardService]},
  {path: 'admin/users', component: UserTableAdminComponent, canActivate: [AdminGuardService]},
  {path: 'admin/users/:username', component: UserPageAdminComponent, canActivate: [AdminGuardService]},
  {path: 'admin/users/:username/activities', component: UserActivityAdminComponent, canActivate: [AdminGuardService]},
  {path: 'admin/users/:username/stats', component: UserStatsAdminComponent, canActivate: [AdminGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
