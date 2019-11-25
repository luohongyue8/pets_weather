import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CatFront';
  showCatflg = false;
  searchWeatherflg = false;
  constructor(private router: Router,
              private route: ActivatedRoute) {
  }
  showCats() {
    this.showCatflg = true;
    this.searchWeatherflg = false;
    // this.router.navigate(['/cat'], { relativeTo: this.route, skipLocationChange: true });

  }


  searchWeather() {
    this.showCatflg = false;
    this.searchWeatherflg = true;
    // this.router.navigate(['/weather'], { relativeTo: this.route, skipLocationChange: true });
  }
}
