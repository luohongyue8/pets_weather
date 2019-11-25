import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowCatComponent} from './show-cat/show-cat.component';
import {ShowWeatherComponent} from './show-weather/show-weather.component';

const routes: Routes = [
  { path: 'cat', component: ShowCatComponent },
  { path: 'weather', component: ShowWeatherComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
