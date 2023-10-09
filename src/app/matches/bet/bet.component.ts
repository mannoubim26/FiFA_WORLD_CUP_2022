import { Component } from '@angular/core';
import { GrpValueService } from 'src/app/service/grp-value.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent {

  constructor(private readonly _serv: GrpValueService){}

  groups:String[]=["All Groups","Group A","Group B","Group C","Group D","Group E","Group F","Group G","Group H"];
  
  getVal = (item : String) =>{
    this._serv.group = item ;
    }

    public get selectedgrp() {
      return this._serv.group;
    }
}
