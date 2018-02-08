import { Http } from '@angular/http';
import { Injectable } from '@angular/core'; 
import 'rxjs/add/operator/map';
//import { catchError } from 'rxjs/operators';

@Injectable()

export class CityService {

selectedCity;

	constructor (private http: Http) {}

	convertTemp(temp) {
		if (temp<0) {
			return '-'+(-1)*Math.round(temp);
		} else {
			return '+'+Math.round(temp);
		}
	}

	getCurrentWeather(city) {

		return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" 
		+ city + "&units=metric" + "&APPID=3cb00aac70be59853a847727c8fad1aa")
		.map(resp => resp.json())
		.map(resp => {

			return {
				name: resp.name,
				id: resp.id,
				country: resp.sys.country,
				temp: this.convertTemp(resp.main.temp),
				temp_min: this.convertTemp(resp.main.temp_min),
				temp_max: this.convertTemp(resp.main.temp_max),
				description: resp.weather[0].description,
				icon: 'http://openweathermap.org/img/w/'+ resp.weather[0].icon +'.png'
			}
		});
	}

	setCity(city) {
		this.selectedCity = city;
		console.log (' set service '+this.selectedCity);
	}

	getCity() {
		console.log (' get service '+this.selectedCity);
		return this.selectedCity;
	}
}