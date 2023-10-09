import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hoteld',
  templateUrl: './hoteld.component.html',
  styleUrls: ['./hoteld.component.css']
})
export class HoteldComponent implements OnInit {

  status: boolean = false;

  constructor(private router: Router){

  }
  ngOnInit(): void {
  }

  clickEvent(){
    this.router.navigate(['buynow1']);
  }}
