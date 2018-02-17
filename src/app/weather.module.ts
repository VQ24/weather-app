import { NgModule } from '@angular/core';
import { WindPipe } from './wind.pipe';
import { CountryCodesPipe } from './countryCodes.pipe';
import { WeatherComponent } from './weather/weather.component';
import { CityComponent } from './city/city.component';
import { ListComponent } from './list/list.component';
import { CityService } from './city.service';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CityComponent,
    WindPipe,
    CountryCodesPipe,
    WeatherComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    CityService
  ],
  exports: [
    CityComponent,
    WindPipe,
    CountryCodesPipe,
    WeatherComponent,
    ListComponent
  ]
})
export class WeatherModule { }