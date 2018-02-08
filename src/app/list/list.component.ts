import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [CityService,
  			AppComponent]
})
export class ListComponent implements OnInit {

searchStr = '';
error;
isError = true;

cityNames = [
	{name: 'London'},
	{name: 'Oymyakon'},
	{name: 'Madrid'}
];
  
	constructor(private cityService: CityService, private appComponent: AppComponent){}

  ngOnInit() {

  	this.appComponent.cities.forEach(city => {
	  	this.cityService.getCurrentWeather(city.name).subscribe(weather=>{
	  		this.appComponent.cities.push(weather);
	  	});  		
  	});
  	//console.log(this.appComponent.cities);
  }

  onChange(){
  	this.cityService.getCurrentWeather(this.searchStr).subscribe(weather=>{
  			this.appComponent.cities = this.appComponent.cities.filter(function(newItem) {
  				return weather.id != newItem.id;
  			});
	  		this.appComponent.cities.push(weather);
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
}
