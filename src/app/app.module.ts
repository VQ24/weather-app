import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes = [
  {path:'', component: ListComponent},
  {path:'cityweather', component: WeatherComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    SearchPipe,
    WeatherComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WeatherComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
