import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { Sidebar1Component } from './sidebar1/sidebar1.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ActivityComponent } from './activity/activity.component';
import { TeamsComponent } from './teams/teams.component';

// const route:Routes=[{path:'chat', component: ChatComponent}]

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    Sidebar1Component,
    Sidebar2Component,
    MainsectionComponent,
    ChatComponent,
    ActivityComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{path:'chat', component: ChatComponent},
    {path:'activity', component: ActivityComponent},
    {path:'teams', component: TeamsComponent}]),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
