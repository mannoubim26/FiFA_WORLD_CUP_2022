import { Injectable } from '@angular/core';
import { MatchInteface} from "src/app/matches/match.inteface";


@Injectable({
  providedIn: 'root'
})
export class MymatchesService {

  public mybets:MatchInteface[]=[] ;

  public selected(match:MatchInteface){
    const index = this.mybets.indexOf(match);
    if (index > -1) {
      return this.mybets.at(index)?.Choice;
    }else{
      return "none"
    }
  }

  x:number=0;

  public bet(match:MatchInteface , cout:string){
    match.Choice=cout;
    
    const index = this.mybets.indexOf(match);
    if (index > -1) {
      this.mybets.splice(index, 1);
    }

    this.mybets.push(match);
    this.x=this.mybets.length;
  }

  constructor() { }
}
