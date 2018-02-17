import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { cityReducer } from "./cityReducer";
import { WeatherModule } from "./weather.module";
import { WeatherComponent } from './weather/weather.component';
import { ListComponent } from './list/list.component';

const routes = [
  {path:'', component: ListComponent},
  {path:'cityweather/:id', component: WeatherComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({cityData: cityReducer}),
    StoreDevtoolsModule.instrument(),
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
