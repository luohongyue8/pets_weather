import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowCatComponent } from './show-cat/show-cat.component';
import { ShowWeatherComponent } from './show-weather/show-weather.component';
import {HttpService} from './http/http.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {LoadingviewComponent} from "./loadingview/loadingview.component";

@NgModule({
  declarations: [
    AppComponent,
    ShowCatComponent,
    ShowWeatherComponent,
    LoadingviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
