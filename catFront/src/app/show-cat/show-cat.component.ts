import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http/http.service';
import {GenderCatDetail} from './domain/catDetail';
// import {properties} from '../setting/properties';

@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.css']
})
export class ShowCatComponent implements OnInit {

  catsHolded: GenderCatDetail;
  loadingViewFlg = false;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getCats();
  }

  /**
   * get cats
   */
  getCats() {
    this.loadingViewFlg = true;

    this.http.formByJson('cat/getCats',  null).subscribe(s => {
        if (s) {
          this.catsHolded = s as GenderCatDetail;
        } else {
          alert ('Fail to get cats.');
        }
        this.loadingViewFlg = false;
      },
      error => {
        alert ('Fail to get cats.');
        this.loadingViewFlg = false;
      });
  }

}
