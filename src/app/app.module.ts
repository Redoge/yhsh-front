import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './pages/main/main.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import {FormsModule} from "@angular/forms";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MyActivityPageComponent } from './pages/users/my-activity/my-activity-page.component';
import { NewActivityComponent } from './pages/users/new-activity/new-activity.component';
import { StatsPageComponent } from './pages/users/stats/stats-page.component';
import { SomeActivityComponent } from './pages/users/some-activity/some-activity.component';
import { TrainingInActivityComponent } from './components/training-in-activity/training-in-activity.component';
import { StatsBlockComponent } from './components/stats-block/stats-block.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/loading/loading.component';
import {AuthInterceptor} from "./service/Interceptor/auth.interceptor";
import { AdminPanelComponent } from './pages/admin/admin-panel/admin-panel.component';
import { UserTableAdminComponent } from './pages/admin/user-administation/user-table-admin.component';
import { UserProfilePageComponent } from './pages/users/user-profile-page/user-profile-page.component';
import { UserPageAdminComponent } from './pages/admin/user-page-admin/user-page-admin.component';
import { I18nBlockComponent } from './components/i18n-block/i18n-block.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LangService} from "./service/lang/lang.service";
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { UserActivityComponent } from './components/user-activity/user-activity.component';
import { UserStatsAdminComponent } from './pages/admin/user-stats-admin/user-stats-admin.component';
import { UserActivityAdminComponent } from './pages/admin/user-activity-admin/user-activity-admin.component';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { EmailActivateComponent } from './components/email-activate-modal/email-activate.component';
import { UserAllWorkoutsComponent } from './components/user-all-workouts/user-all-workouts.component';
import { UserAllWorkoutsPageComponent } from './pages/users/user-all-workouts-page/user-all-workouts-page.component';
import { NewWorkoutComponent } from './pages/users/new-workout/new-workout.component';
import { WorkoutCardComponent } from './components/workout-card/workout-card.component';
import { SomeWorkoutPageComponent } from './pages/users/some-workout-page/some-workout-page.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { FriendsPageComponent } from './pages/users/friends-page/friends-page.component';
import { FriendUserPageComponent } from './pages/users/friend-user-page/friend-user-page.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    MyActivityPageComponent,
    NewActivityComponent,
    StatsPageComponent,
    SomeActivityComponent,
    TrainingInActivityComponent,
    StatsBlockComponent,
    LoadingComponent,
    AdminPanelComponent,
    UserTableAdminComponent,
    UserProfilePageComponent,
    UserPageAdminComponent,
    I18nBlockComponent,
    ThemeToggleComponent,
    ActivityCardComponent,
    UserActivityComponent,
    UserStatsAdminComponent,
    UserActivityAdminComponent,
    UserStatsComponent,
    EmailActivateComponent,
    UserAllWorkoutsComponent,
    UserAllWorkoutsPageComponent,
    NewWorkoutComponent,
    WorkoutCardComponent,
    SomeWorkoutPageComponent,
    FriendsListComponent,
    FriendsPageComponent,
    FriendUserPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, LangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
