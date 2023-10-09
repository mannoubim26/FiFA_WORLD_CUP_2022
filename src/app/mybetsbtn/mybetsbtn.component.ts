import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mybetsbtn',
  templateUrl: './mybetsbtn.component.html',
  styleUrls: ['./mybetsbtn.component.css']
})
export class MybetsbtnComponent {
  constructor(private router: Router ){}

  myBets(){
    this.router.navigate(['mybets'])
  }
}
