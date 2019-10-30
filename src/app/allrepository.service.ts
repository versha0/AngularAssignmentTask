import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class AllrepositoryService {
  private _url = 'https://api.github.com/users/versha0/repos';
  constructor(private http: HttpClient) { }
  getAllRepo(): Observable <object> {
    return this.http.get(this._url);
  }
}
