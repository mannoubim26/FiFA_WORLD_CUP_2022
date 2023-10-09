import { Component, OnInit } from '@angular/core';
import { TeamsComponent } from '../teams/teams.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
 
 x = TeamsComponent.value ;

data = {"team" : ["argenTINA" , "AUSTRALIA" , "BELGUIM","BRAZIL","CAMEROON","CANADA","COSTA RICA","CROATIA","DENMARK","ECUADOR","ENGLAND"
,"FRANCE","GERMANY","GHANA","IRAN","JAPAN","KOREA REPUBLIC","MEXICO","MOROCCO","NETHERLANDS","POLAND","PORTUGAL","QATAR","SAUDI ARABIA",
"SENEGAL","SERBIA","SPAIN","SUITZERLAND","TUNISIA","UNITED STATES","URUGUAY","WALES"],

"teamimg" : ['https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG?tx=c_fill,g_auto,q_auto,w_94,h_62 ',
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
'https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/WAL?tx=c_fill,g_auto,q_auto,w_94,h_62', ] ,

"squad" : ["assets/arg.png","assets/aus.png","assets/bel.png","assets/bra.png","assets/cmr.png","assets/can.png","assets/crc.png"
,"assets/cro.png","assets/den.png","assets/ecu.png","assets/eng.png","assets/fra.png","assets/ger.png","assets/gha.png",
"assets/irn.png","assets/jpn.png","assets/kor.png","assets/mex.png","assets/mor.png","assets/ned.png","assets/pol.png"
,"assets/pro.png","assets/qat.png","assets/ksa.png","assets/sen.png","assets/ser.png","assets/spa.png","assets/swit.png",
"assets/tun.png","assets/usa.png","assets/uru.png","assets/wal.png"]};

 
  ngOnInit(): void {
  }
 


}
 