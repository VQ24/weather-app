import { Component, OnInit, Input } from '@angular/core';
import { CityService } from '../city.service';
import { City, cityReducer } from '../cityReducer';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})

export class CityComponent implements OnInit {

  constructor (private cityService: CityService, private listComponent: ListComponent) {}

  ngOnInit() {
  }

  @Input() city; 
  
  onClose() {
  	 let city = this.city; 
  	 this.listComponent.cities = this.listComponent.cities.filter(newItem => city != newItem);
     this.cityService.removeCity(this.city);
  }

  onForecast(){
  }

}
