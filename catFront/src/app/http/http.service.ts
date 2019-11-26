import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable} from 'rxjs/index';
import { properties} from '../setting/properties';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  /**
   * Post Method (form)
   */
  public formByJson<T>(url: string, params?: HttpParams): Observable<any | T> {
    return this.http
      .post<T>(properties.serviceUrl + url, null, { params})
      .pipe(
        catchError(this.handleError)
      );
  }

   handleError(error: Response | any): Observable<any > {

    return new Observable<any>(error);
  }

}
