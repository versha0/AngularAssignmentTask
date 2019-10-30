import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }
}
