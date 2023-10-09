import { Component } from '@angular/core';
import { MatchInteface } from '../matches/match.inteface';
import { MymatchesService } from '../service/mymatches.service';

@Component({
  selector: 'app-mymatches',
  templateUrl: './mymatches.component.html',
  styleUrls: ['./mymatches.component.css']
})
export class MymatchesComponent {
  constructor(public readonly M_serv:MymatchesService){}
  cotes=0;
  amount=0;
  x=false;
  totalprice(){
  return this.amount*this.cotes;
  }

  ff(){
    for (const i of this.M_serv.mybets) {
      if (i.Choice=="x") {
        let x=i.coutx ;
        this.cotes=this.cotes+ x!;
      } else if(i.Choice=="1"){
        let x=i.cout1 ;
        this.cotes=this.cotes+ x!;
      }else if(i.Choice=="2") {
        let x=i.cout2 ;
        this.cotes=this.cotes+ x!;
      }else{
      }
    }
  }
  check(){
    if(this.totalprice()!=0)
      this.x=true;
  }
  
  public selectedCout(match:MatchInteface){
    const index = this.M_serv.mybets.indexOf(match);
    if (index > -1) {
      if (this.M_serv.mybets.at(index)?.Choice=="x") {
        return this.M_serv.mybets.at(index)?.coutx;
      } else if(this.M_serv.mybets.at(index)?.Choice=="1"){
        return this.M_serv.mybets.at(index)?.cout1;
      }else if(this.M_serv.mybets.at(index)?.Choice=="2") {
        return this.M_serv.mybets.at(index)?.cout2;
      }else
      return
    }else{
      return
    }

  }

}
