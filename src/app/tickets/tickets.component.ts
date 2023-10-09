import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { MatchObj } from './match-obj';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {

  status: boolean = false;

  constructor(private router: Router){

  }

  match!: MatchObj;

  clickEvent(){
    this.router.navigate(['ticket']);
  }


  argentine='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG?tx=c_fill,g_auto,q_auto,w_94,h_62 '
  australia='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/AUS?tx=c_fill,g_auto,q_auto,w_94,h_62' ;
   belgium='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/BEL?tx=c_fill,g_auto,q_auto,w_94,h_62' ;
  brazil='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/BRA?tx=c_fill,g_auto,q_auto,w_94,h_62' ;
   cameron='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CMR?tx=c_fill,g_auto,q_auto,w_94,h_62' ;
   canada='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CAN?tx=c_fill,g_auto,q_auto,w_94,h_62';
  costarica='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CRC?tx=c_fill,g_auto,q_auto,w_94,h_62';
   croatia='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CRO?tx=c_fill,g_auto,q_auto,w_94,h_62';
   denimark='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/DEN?tx=c_fill,g_auto,q_auto,w_94,h_62';
  ecuador='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ECU?tx=c_fill,g_auto,q_auto,w_94,h_62';
  england='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ENG?tx=c_fill,g_auto,q_auto,w_94,h_62';
  france='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/FRA?tx=c_fill,g_auto,q_auto,w_94,h_62';
   germany='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/GER?tx=c_fill,g_auto,q_auto,w_94,h_62';
  ghana='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/GHA?tx=c_fill,g_auto,q_auto,w_94,h_62';
  iran='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/IRN?tx=c_fill,g_auto,q_auto,w_94,h_62';
   japon='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/JPN?tx=c_fill,g_auto,q_auto,w_94,h_62';
   corea='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/KOR?tx=c_fill,g_auto,q_auto,w_94,h_62';
  mexic='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/MEX?tx=c_fill,g_auto,q_auto,w_94,h_62';
  morroco='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/MAR?tx=c_fill,g_auto,q_auto,w_94,h_62';
  netherlands='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/NED?tx=c_fill,g_auto,q_auto,w_94,h_62';
  poland='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/POL?tx=c_fill,g_auto,q_auto,w_94,h_62';
  portogal='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/POR?tx=c_fill,g_auto,q_auto,w_94,h_62';
   qatar='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/QAT?tx=c_fill,g_auto,q_auto,w_94,h_62';
   ksa='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/KSA?tx=c_fill,g_auto,q_auto,w_94,h_62' ;
  senegal='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SEN?tx=c_fill,g_auto,q_auto,w_94,h_62';
  serbia='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SRB?tx=c_fill,g_auto,q_auto,w_94,h_62';
   spain='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ESP?tx=c_fill,g_auto,q_auto,w_94,h_62';
   swis='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SUI?tx=c_fill,g_auto,q_auto,w_94,h_62' ;
   tunisia='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/TUN?tx=c_fill,g_auto,q_auto,w_94,h_62'; 
   usa='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/USA?tx=c_fill,g_auto,q_auto,w_94,h_62';
   urguay='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/URU?tx=c_fill,g_auto,q_auto,w_94,h_62';
  wales='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/WAL?tx=c_fill,g_auto,q_auto,w_94,h_62';

  Mgrp={"name":"World Cup 2022","matches":[{"round":"Matchday 1","group":"Group A","date":"2022-11-20","team1":"Qatar","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/QAT?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ECU?tx=c_fill,g_auto,q_auto,w_94,h_62","team2":"Ecuador","price_ticket":199},{"round":"Matchday 2","group":"Group A","date":"2022-11-21","team1":"Senegal","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SEN?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/NED?tx=c_fill,g_auto,q_auto,w_94,h_62","team2":"Netherlands","price_ticket":199},{"round":"Matchday 6","group":"Group A","date":"2022-11-25","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/QAT?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SEN?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Qatar","team2":"Senegal","price_ticket":199},{"round":"Matchday 6","group":"Group A","date":"2022-11-25","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/NED?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ECU?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Netherlands","team2":"Ecuador","price_ticket":199},{"round":"Matchday 10","group":"Group A","date":"2022-11-29","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ECU?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SEN?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Ecuador","team2":"Senegal","price_ticket":199},{"round":"Matchday 10","group":"Group A","date":"2022-11-29","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/NED?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/QAT?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Netherlands","team2":"Qatar","price_ticket":199},{"round":"Matchday 2","group":"Group B","date":"2022-11-21","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ENG?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/IRN?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"England","team2":"Iran","price_ticket":199},{"round":"Matchday 2","group":"Group B","date":"2022-11-21","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/USA?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/WAL?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"United States","team2":"Wales","price_ticket":199},{"round":"Matchday 6","group":"Group B","date":"2022-11-25","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/WAL?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/IRN?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Wales","team2":"Iran","price_ticket":199},{"round":"Matchday 6","group":"Group B","date":"2022-11-25","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ENG?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/USA?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"England","team2":"United States","price_ticket":199},{"round":"Matchday 10","group":"Group B","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/WAL?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ENG?tx=c_fill,g_auto,q_auto,w_94,h_62","date":"2022-11-29","team1":"Wales","team2":"England","price_ticket":199},{"round":"Matchday 10","group":"Group B","date":"2022-11-29","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/IRN?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/USA?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Iran","team2":"United States","price_ticket":199},{"round":"Matchday 3","group":"Group C","date":"2022-11-22","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/KSA?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Argentina","team2":"Saudi Arabia","price_ticket":199},{"round":"Matchday 3","group":"Group C","date":"2022-11-22","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/MEX?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/POL?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Mexico","team2":"Poland","price_ticket":199},{"round":"Matchday 7","group":"Group C","date":"2022-11-26","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/POL?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/KSA?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Poland","team2":"Saudi Arabia","price_ticket":199},{"round":"Matchday 7","group":"Group C","date":"2022-11-26","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/MEX?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Argentina","team2":"Mexico","price_ticket":199},{"round":"Matchday 11","group":"Group C","date":"2022-11-30","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/POL?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Poland","team2":"Argentina","price_ticket":199},{"round":"Matchday 11","group":"Group C","date":"2022-11-30","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/KSA?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/MEX?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Saudi Arabia","team2":"Mexico","price_ticket":199},{"round":"Matchday 3","group":"Group D","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/DEN?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/TUN?tx=c_fill,g_auto,q_auto,w_94,h_62","date":"2022-11-22","team1":"Denmark","team2":"Tunisia","price_ticket":199},{"round":"Matchday 3","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/FRA?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/AUS?tx=c_fill,g_auto,q_auto,w_94,h_62","group":"Group D","date":"2022-11-22","team1":"France","team2":"Australia","price_ticket":199},{"round":"Matchday 7","group":"Group D","date":"2022-11-26","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/TUN?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/AUS?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Tunisia","team2":"Australia","price_ticket":199},{"round":"Matchday 7","group":"Group D","date":"2022-11-26","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/FRA?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/DEN?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"France","team2":"Denmark","price_ticket":199},{"round":"Matchday 11","group":"Group D","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/AUS?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/DEN?tx=c_fill,g_auto,q_auto,w_94,h_62","date":"2022-11-30","team1":"Australia","team2":"Denmark","price_ticket":199},{"round":"Matchday 11","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/TUN?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/FRA?tx=c_fill,g_auto,q_auto,w_94,h_62","group":"Group D","date":"2022-11-30","team1":"Tunisia","team2":"France","price_ticket":199},{"round":"Matchday 4","group":"Group E","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/GER?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/JPN?tx=c_fill,g_auto,q_auto,w_94,h_62","date":"2022-11-23","team1":"Germany","team2":"Japan","price_ticket":199},{"round":"Matchday 4","group":"Group E","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ESP?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CRC?tx=c_fill,g_auto,q_auto,w_94,h_62","date":"2022-11-23","team1":"Spain","team2":"Costa Rica","price_ticket":199},{"round":"Matchday 8","group":"Group E","date":"2022-11-27","team1":"Japan","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/JPN?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CRC?tx=c_fill,g_auto,q_auto,w_94,h_62","team2":"Costa Rica","price_ticket":199},{"round":"Matchday 8","group":"Group E","date":"2022-11-27","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ESP?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/GER?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Spain","team2":"Germany","price_ticket":199},{"round":"Matchday 12","group":"Group E","date":"2022-12-01","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/JPN?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ESP?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Japan","team2":"Spain","price_ticket":199},{"round":"Matchday 12","group":"Group E","date":"2022-12-01","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CRC?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/GER?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Costa Rica","team2":"Germany","price_ticket":199},{"round":"Matchday 4","group":"Group F","date":"2022-11-23","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/MAR?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CRO?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Morocco","team2":"Croatia","price_ticket":199},{"round":"Matchday 4","group":"Group F","date":"2022-11-23","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/BEL?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CAN?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Belgium","team2":"Canada","price_ticket":199},{"round":"Matchday 8","group":"Group F","date":"2022-11-27","team1":"Belgium","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/BEL?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/MAR?tx=c_fill,g_auto,q_auto,w_94,h_62","team2":"Morocco","price_ticket":199},{"round":"Matchday 8","group":"Group F","date":"2022-11-27","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CRO?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CAN?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Croatia","team2":"Canada","price_ticket":199},{"round":"Matchday 12","group":"Group F","date":"2022-12-01","team1":"Croatia","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CRO?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/BEL?tx=c_fill,g_auto,q_auto,w_94,h_62","team2":"Belgium","price_ticket":199},{"round":"Matchday 12","group":"Group F","date":"2022-12-01","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CAN?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/MAR?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Canada","team2":"Morocco","price_ticket":199},{"round":"Matchday 5","group":"Group G","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SUI?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CMR?tx=c_fill,g_auto,q_auto,w_94,h_62","date":"2022-11-24","team1":"Switzerland","team2":"Cameroon","price_ticket":199},{"round":"Matchday 5","group":"Group G","date":"2022-11-24","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/BRA?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SRB?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Brazil","team2":"Serbia","price_ticket":199},{"round":"Matchday 9","group":"Group G","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CMR?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SRB?tx=c_fill,g_auto,q_auto,w_94,h_62","date":"2022-11-28","team1":"Cameroon","team2":"Serbia","price_ticket":199},{"round":"Matchday 9","group":"Group G","date":"2022-11-28","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/BRA?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SUI?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Brazil","team2":"Switzerland","price_ticket":199},{"round":"Matchday 13","group":"Group G","date":"2022-12-02","team1":"Serbia","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SRB?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SUI?tx=c_fill,g_auto,q_auto,w_94,h_62","team2":"Switzerland","price_ticket":199},{"round":"Matchday 13","group":"Group G","date":"2022-12-02","team1":"Cameroon","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CMR?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/BRA?tx=c_fill,g_auto,q_auto,w_94,h_62","team2":"Brazil","price_ticket":199},{"round":"Matchday 5","group":"Group H","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/URU?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/KOR?tx=c_fill,g_auto,q_auto,w_94,h_62","date":"2022-11-24","team1":"Uruguay","team2":"South Korea","price_ticket":199},{"round":"Matchday 5","group":"Group H","date":"2022-11-24","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/POR?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/GHA?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Portugal","team2":"Ghana","price_ticket":199},{"round":"Matchday 9","group":"Group H","date":"2022-11-28","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/KOR?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/GHA?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"South Korea","team2":"Ghana","price_ticket":199},{"round":"Matchday 9","group":"Group H","date":"2022-11-28","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/POR?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/URU?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"Portugal","team2":"Uruguay","price_ticket":199},{"round":"Matchday 13","group":"Group H","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/GHA?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/URU?tx=c_fill,g_auto,q_auto,w_94,h_62","date":"2022-12-02","team1":"Ghana","team2":"Uruguay","price_ticket":199},{"round":"Matchday 13","group":"Group H","date":"2022-12-02","team1img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/KOR?tx=c_fill,g_auto,q_auto,w_94,h_62","team2img":"https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/POR?tx=c_fill,g_auto,q_auto,w_94,h_62","team1":"South Korea","team2":"Portugal","price_ticket":199}]}
}