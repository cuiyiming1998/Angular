import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HeadComponent } from './components/head/head.component';
import { MainComponent } from './components/main/main.component';
import { BottomComponent } from './components/bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MainComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
