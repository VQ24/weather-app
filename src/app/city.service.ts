import { Http } from '@angular/http';
import { Injectable } from '@angular/core'; 
import 'rxjs/add/operator/map';
import { City, cityReducer } from './cityReducer';
import { Store } from '@ngrx/store';
//import { catchError } from 'rxjs/operators';

@Injectable()

export class CityService{

	constructor (private http: Http, private store: Store<any>) {
		store.select('store').subscribe(item => {
  		store = item;
		});
	}

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

	getForecast(id) {
		return this.http.get("http://api.openweathermap.org/data/2.5/forecast?id=" 
		+ id + "&units=metric" + "&APPID=3cb00aac70be59853a847727c8fad1aa")
		.map(resp => resp.json())
		.map(resp => {

			return {
				name: resp.city.name,
				id: resp.city.id,
				country: resp.city.country,

				list: resp.list // 5 days each 3 hours forecast here
			}
		});
	}

	addCity(city) {
	    this.store.dispatch({
	    type: 'ADD_CITY',
		payload: city
    	})
	}

	removeCity(city) {
		this.store.dispatch({
	    type: 'REMOVE_CITY',
		payload: city
    	})
	}

}