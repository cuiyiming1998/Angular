import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';

import {RouterModule,Router} from '@angular/router';
import { LessonComponent } from './components/lesson/lesson.component'
import { HttpClient } from "selenium-webdriver/http";
import { HttpClientModule } from "@angular/common/http";
import { LessondetailComponent } from './components/lessondetail/lessondetail.component';
import { CommunityComponent } from './components/community/community.component';
import { CourseComponent } from './components/course/course.component';
import { CoursedatailComponent } from './components/coursedatail/coursedatail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LessonComponent,
    LessondetailComponent,
    CommunityComponent,
    CourseComponent,
    CoursedatailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'lesson',component:LessonComponent},
      {path:'lesson/:lessonId',component:LessondetailComponent},
      {path:'course',component:CourseComponent},
      {path:'course/:courseId',component:CoursedatailComponent},
      {path:'community',component:CommunityComponent},
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", component: HomeComponent }
      
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
