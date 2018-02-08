import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

city;

  constructor() { }

  ngOnInit() {
  }

  setCity(city){
  	this.city = city;
  	console.log(this.city);
  }

  getCity(){
  	console.log(this.city);
  }
}

