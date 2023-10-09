import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.css']
})
export class StadiumsComponent implements OnInit {

  constructor(private router : Router) { }
  
  staduim={"lusail":"https://www.stadiumguide.com/wp-content/uploads/lusail2022.jpg",
  "Alkhor":"https://www.stadiumguide.com/wp-content/uploads/albayt_top.jpg",
  "Alwakrah":"https://www.stadiumguide.com/wp-content/uploads/alwakrah_top.jpg",
  "Doha1":"https://www.stadiumguide.com/wp-content/uploads/althumama2022.jpg",
  "Doha2":"https://www.stadiumguide.com/wp-content/uploads/qatarfoundation_top.jpg",
  "Doha3":"https://www.stadiumguide.com/wp-content/uploads/khalifanew_top.jpg",
  "Alrayyan":"https://www.stadiumguide.com/wp-content/uploads/alrayyan_top.jpg",
  "doha974": "https://www.stadiumguide.com/wp-content/uploads/rasabuaboud2022.jpg"
};

Alkhor(){
  this.router.navigate(['alkhor']);
}

Alwakrah(){
  this.router.navigate(['alwakrah']);
}

Alrayyan(){
  this.router.navigate(['alrayyan']);
}

Khalifa(){
  this.router.navigate(['khalifa']);
}

eduCity(){
  this.router.navigate(['etucity']);
}

AlThumama(){
  this.router.navigate(['althumama']);
}

lusail(){
  this.router.navigate(['lusail']);
}

doha974(){
  this.router.navigate(['974']);
}

  ngOnInit(): void {
  }

}
