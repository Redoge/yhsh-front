import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './pages/main/main.component';
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import {FormsModule} from "@angular/forms";
import { UserMainPageComponent } from './pages/users/main-page/user-main-page.component';
import { MyActivityComponent } from './pages/users/my-activity/my-activity.component';
import { NewActivityComponent } from './pages/users/new-activity/new-activity.component';
import { StatsComponent } from './pages/users/stats/stats.component';
import { SomeActivityComponent } from './pages/users/some-activity/some-activity.component';
import { LinkActivityComponent } from './components/link-activity/link-activity.component';
import { TrainingInActivityComponent } from './components/training-in-activity/training-in-activity.component';
import { StatsBlockComponent } from './components/stats-block/stats-block.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/loading/loading.component';
import { ActivityTrainingTableComponent } from './components/activity-training-table/activity-training-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    UserMainPageComponent,
    MyActivityComponent,
    NewActivityComponent,
    StatsComponent,
    SomeActivityComponent,
    LinkActivityComponent,
    TrainingInActivityComponent,
    StatsBlockComponent,
    LoadingComponent,
    ActivityTrainingTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
