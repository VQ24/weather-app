import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CityService } from '../city.service';
import { City, cityReducer } from '../cityReducer';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})

export class CityComponent implements OnInit {

  @Output() public onRemoveCity = new EventEmitter();

  constructor (private cityService: CityService) {}

  ngOnInit() {
  }

  @Input() city; 
  
  onClose() {
    this.onRemoveCity.emit(this.city);
  }

  onForecast(){
  }

}
