import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrpValueService {
  public group:String = "All Groups";
  public groups:String[]=["Group A","Group B","Group C","Group D","Group E","Group F","Group G","Group H"];
  
  constructor() { }
}
