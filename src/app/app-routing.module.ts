import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from 'src/app/home/home.component';
import { HoteldComponent } from './hoteld/hoteld.component';
import { StadiumsComponent } from './stadiums/stadiums.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';
import { TicketsComponent } from './tickets/tickets.component';
import { BuynowComponent } from './buynow/buynow.component';
import { Buynow1Component } from './buynow1/buynow1.component';
import { AlKhorComponent } from './stadium/al-khor/al-khor.component';
import { AlRayyanComponent } from './stadium/al-rayyan/al-rayyan.component';
import { AlWakrahComponent } from './stadium/al-wakrah/al-wakrah.component';
import { DohaAlThumamaComponent } from './stadium/doha-al-thumama/doha-al-thumama.component';
import { DohaEducationCityComponent } from './stadium/doha-education-city/doha-education-city.component';
import { DohaKhalifaComponent } from './stadium/doha-khalifa/doha-khalifa.component';
import { Doha974Component } from './stadium/doha974/doha974.component';
import { LusailComponent } from './stadium/lusail/lusail.component';
import { MymatchesComponent } from './mymatches/mymatches.component';
import { LoginComponent } from './login/login.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  { path: '', redirectTo : 'login', pathMatch : 'full'},
  { path: 'team',component:TeamComponent},
  { path: 'bets',component:HomeComponent},
  { path: 'login', component: LoginpageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mybets', component: MymatchesComponent },
  { path: 'ticket',component:BuynowComponent},
  { path: 'buynow1',component:Buynow1Component},
  { path: 'app-hoteld',component:HoteldComponent},
  { path: 'app-groups',component:GroupsComponent},
  { path: 'app-tickets',component:TicketsComponent},
  { path: 'app-teams',component:TeamsComponent},
  { path: 'app-staduims',component:StadiumsComponent},
  { path: 'alkhor',component:AlKhorComponent},
  { path: 'alrayyan',component:AlRayyanComponent},
  { path: 'alwakrah',component:AlWakrahComponent},
  { path: 'althumama',component:DohaAlThumamaComponent},
  { path: 'etucity',component:DohaEducationCityComponent},
  { path: 'khalifa',component:DohaKhalifaComponent},
  { path: '974',component:Doha974Component},
  { path: 'lusail',component:LusailComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
