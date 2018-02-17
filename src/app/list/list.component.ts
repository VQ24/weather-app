import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

searchStr = '';
error;
isError = true;
cities;
 
  constructor(private cityService: CityService, private store: Store<any> ) { 

    store.select('cityData').subscribe(item => {
      store = item;
    });

    this.cities = store;
  }

  ngOnInit() {

  }

  onChange(){
    this.cityService.getCurrentWeather(this.searchStr).subscribe(weather=>{
        this.cities = this.cities.filter(function(newItem) {
          return weather.id != newItem.id;
        });
        this.cities.push(weather);

        this.cityService.addCity(weather); 
        this.isError = true;
      },

      error => {this.error = error.message;
          this.isError = false;
        });

  this.searchStr = '';
  }

  onErrBtnClick(){
    this.isError = true;
  }

  onKeyPress(){
    this.isError = true;
  }

  public handleRemoveCity(city) {
     this.cities = this.cities.filter(newItem => city != newItem);
     this.cityService.removeCity(city);
  }

}
