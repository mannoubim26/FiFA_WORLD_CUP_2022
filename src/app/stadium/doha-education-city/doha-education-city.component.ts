import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doha-education-city',
  templateUrl: './doha-education-city.component.html',
  styleUrls: ['./doha-education-city.component.css']
})
export class DohaEducationCityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  staduim={"lusail":"https://www.stadiumguide.com/wp-content/uploads/lusail2022.jpg",
  "Alkhor":"https://www.stadiumguide.com/wp-content/uploads/albayt_top.jpg",
  "Alwakrah":"https://www.stadiumguide.com/wp-content/uploads/alwakrah_top.jpg",
  "Doha1":"https://www.stadiumguide.com/wp-content/uploads/althumama2022.jpg",
  "Doha2":"https://www.stadiumguide.com/wp-content/uploads/qatarfoundation_top.jpg",
  "Doha3":"https://www.stadiumguide.com/wp-content/uploads/khalifanew_top.jpg",
  "Alrayyan":"https://www.stadiumguide.com/wp-content/uploads/alrayyan_top.jpg",
  "doha974": "https://www.stadiumguide.com/wp-content/uploads/rasabuaboud2022.jpg"
};
}
