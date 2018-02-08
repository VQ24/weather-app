import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor (private appComponent: AppComponent,
               private weatherComponent: WeatherComponent) {}

  ngOnInit() {

  }

  @Input() city; 
  
  onClick() {
  	let city = this.city; 
  	this.appComponent.cities = this.appComponent.cities.filter(newItem => city != newItem);
  }

  onForecastClick() {
    this.weatherComponent.setCity(this.city);
  }
}
