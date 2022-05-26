import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { Sidebar1Component } from './sidebar1/sidebar1.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    Sidebar1Component,
    Sidebar2Component,
    MainsectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
