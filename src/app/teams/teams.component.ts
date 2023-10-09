import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  static value: any;
  static tab : [] ;
 setvalue(x: number) {
 TeamsComponent.value=x;
} 
  ngOnInit(): void {
  }

  tab=[
'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG?tx=c_fill,g_auto,q_auto,w_94,h_62 ',
 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/AUS?tx=c_fill,g_auto,q_auto,w_94,h_62' ,
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/BEL?tx=c_fill,g_auto,q_auto,w_94,h_62' ,
 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/BRA?tx=c_fill,g_auto,q_auto,w_94,h_62' ,
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CMR?tx=c_fill,g_auto,q_auto,w_94,h_62' ,
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CAN?tx=c_fill,g_auto,q_auto,w_94,h_62',
 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CRC?tx=c_fill,g_auto,q_auto,w_94,h_62',
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CRO?tx=c_fill,g_auto,q_auto,w_94,h_62',
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/DEN?tx=c_fill,g_auto,q_auto,w_94,h_62',
 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ECU?tx=c_fill,g_auto,q_auto,w_94,h_62',
 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ENG?tx=c_fill,g_auto,q_auto,w_94,h_62',
'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/FRA?tx=c_fill,g_auto,q_auto,w_94,h_62',
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/GER?tx=c_fill,g_auto,q_auto,w_94,h_62',
'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/GHA?tx=c_fill,g_auto,q_auto,w_94,h_62',
 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/IRN?tx=c_fill,g_auto,q_auto,w_94,h_62',
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/JPN?tx=c_fill,g_auto,q_auto,w_94,h_62',
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/KOR?tx=c_fill,g_auto,q_auto,w_94,h_62',
 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/MEX?tx=c_fill,g_auto,q_auto,w_94,h_62',
'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/MAR?tx=c_fill,g_auto,q_auto,w_94,h_62',
 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/NED?tx=c_fill,g_auto,q_auto,w_94,h_62',
 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/POL?tx=c_fill,g_auto,q_auto,w_94,h_62',
'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/POR?tx=c_fill,g_auto,q_auto,w_94,h_62',
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/QAT?tx=c_fill,g_auto,q_auto,w_94,h_62',
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/KSA?tx=c_fill,g_auto,q_auto,w_94,h_62' ,
 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SEN?tx=c_fill,g_auto,q_auto,w_94,h_62',
'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SRB?tx=c_fill,g_auto,q_auto,w_94,h_62',
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ESP?tx=c_fill,g_auto,q_auto,w_94,h_62',
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SUI?tx=c_fill,g_auto,q_auto,w_94,h_62' ,
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/TUN?tx=c_fill,g_auto,q_auto,w_94,h_62' , 
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/USA?tx=c_fill,g_auto,q_auto,w_94,h_62',
  'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/URU?tx=c_fill,g_auto,q_auto,w_94,h_62',
 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/WAL?tx=c_fill,g_auto,q_auto,w_94,h_62', ];


}

