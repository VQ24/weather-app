import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';
import { CountryCodesPipe } from '../countryCodes.pipe';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [CityService]
})
export class WeatherComponent implements OnInit {

id;
city = {list:[]};

curState = {
        dt:'',
        main:{
            temp:'',
            temp_min:'',
            temp_max:'',
            pressure:'',
            sea_level:'',
            grnd_level:'',
            humidity:'',
            temp_kf:''},
        weather:[{id:'',
            main:'',
            description:'',
            icon:''}],
        clouds:{all:''},
        wind:{speed:'',
              deg:''},
        sys:{pod:''},
        dt_txt:''
      };


  constructor(private route: ActivatedRoute, private cityService: CityService) {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.cityService.getForecast(this.id).subscribe(weather=>{this.city = weather},
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

