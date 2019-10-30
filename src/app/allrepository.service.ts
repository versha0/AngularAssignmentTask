import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/';
import {MainService} from './main.service';

@Injectable({
  providedIn: 'root'
})
export class AllrepositoryService {
  private url = 'https://api.github.com/users/versha0/repos';

  constructor(
    private http: HttpClient
  ) {
  }


  getAllRepo(): Observable<object> {
    return this.http.get(this.url);
  }
}
