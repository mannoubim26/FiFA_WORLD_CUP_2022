import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HoteldComponent } from './hoteld/hoteld.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsModalService, ModalModule}from 'ngx-bootstrap/modal';
import { GroupsComponent } from './groups/groups.component';
import { StadiumsComponent } from './stadiums/stadiums.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './team/team.component';
import { TicketsComponent } from './tickets/tickets.component';
import { BuynowComponent } from './buynow/buynow.component';
import { Buynow1Component } from './buynow1/buynow1.component';
import { MatchComponent } from './matches/match/match.component';
import { BetComponent } from './matches/bet/bet.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { MymatchesComponent } from './mymatches/mymatches.component';
import { MybetsbtnComponent } from './mybetsbtn/mybetsbtn.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


@NgModule({
  declarations: [
    AppComponent,
   NavbarComponent,
    HoteldComponent,
    GroupsComponent,
    StadiumsComponent,
    TeamsComponent,
    HomeComponent,
    BetComponent,
    TeamComponent,
    TicketsComponent,
    BuynowComponent,
    Buynow1Component,
    AppComponent,
    MatchComponent,
    BetComponent,
    HeaderComponent,
    LogoutComponent,
    HomeComponent,
    MymatchesComponent,
    MybetsbtnComponent,
    LoginComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
