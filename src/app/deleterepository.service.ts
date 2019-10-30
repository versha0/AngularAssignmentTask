import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleterepositoryService {
//  bd8b8277536b6e160afc70832c839d6f5c0acde8=mytoken
  private url1 = 'https://api.github.com/repos/versha0/';
  private url2 = '?access_token=bd8b8277536b6e160afc70832c839d6f5c0acde8';
  constructor(private http: HttpClient) { }
  deleteRepo(repoName: string) {
    return this.http.delete(this.url1 + repoName + this.url2);
    {
      console.log('deleted');
    }
  }
}
