import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { FormsModule } from '@angular/forms';
import { WindPipe } from './wind.pipe';
import { CountryCodesPipe } from './countryCodes.pipe';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { cityReducer } from "./cityReducer";

const routes = [
  {path:'', component: ListComponent},
  {path:'cityweather/:id', component: WeatherComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    WindPipe,
    CountryCodesPipe,
    WeatherComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({store: cityReducer}),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
