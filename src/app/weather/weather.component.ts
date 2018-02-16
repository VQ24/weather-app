import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';
import { CountryCodesPipe } from '../countryCodes.pipe';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

id;
  city = {list:[]};

  public curState;
  public isLoaded = false;


  constructor(private route: ActivatedRoute, private cityService: CityService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.cityService.getForecast(this.id).subscribe(weather=>{
      this.city = weather;
      this.curState = this.city.list[0];
      this.isLoaded = true;
    },
    error => {});

   }

  ngOnInit() {

  }

  onDeatilClick(_curState) {
    this.curState = _curState;
  }

  select(item) {
      // this.selected = item; 
  };
  isActive(item) {
      // return this.selected === item;
  };
}

