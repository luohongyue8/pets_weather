import { Component, OnInit } from '@angular/core';
import { HttpParams} from '@angular/common/http';
import { WeatherDetail} from './domain/weatherDetail';
import { HttpService} from '../http/http.service';
// import {properties} from "../setting/properties";

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})

export class ShowWeatherComponent implements OnInit {

  city: string;
  cities: string[];
  weatherinfo: WeatherDetail;
  loadingViewFlg = false;
  constructor(private http: HttpService) { }

  ngOnInit() {

    // this.city = 'Sydney';
    this.loadingViewFlg = true;
    this.getCities();

  }

  /**
   *  get cities list
   */
  getCities() {

    this.http.formByJson('weather/getCities',  null).subscribe(s => {
        if (s) {
          this.cities = s as string[];
          if (this.cities && this.cities.length > 0) {
            this.city = this.cities[0];
            this.getWeather(this.city);
          }

        } else {
          alert ('Fail to get cities ' + this.city);
          this.loadingViewFlg = false;
        }

      },
      error => {
        alert ('Fail to get cities ' + this.city);
        this.loadingViewFlg = false;
      });
  }

  /**
   *  get weather for the city
   */
  getWeather(city) {

    let httpParams = new HttpParams();
    httpParams = httpParams.append('city', city);

    this.http.formByJson('weather/getCurrentData',  httpParams).subscribe(s => {
        if (s) {
          this.weatherinfo = s as WeatherDetail;
        } else {
          alert ('Fail to get weather for ' + this.city);
        }
        this.loadingViewFlg = false;
      },
      error => {
        alert ('Fail to get weather for ' + this.city);
        this.loadingViewFlg = false;
      });
  }

  /**
   *  choose city to get weather
   */
  selCity(item) {
    this.city = item;
    this.loadingViewFlg = true;
    this.getWeather(this.city);
  }
}
