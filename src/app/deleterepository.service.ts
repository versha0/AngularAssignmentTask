import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleterepositoryService {
// e764590ec5b1e77ce1c4338d402d347ec8707c70=mytoken
  private url1 = 'https://api.github.com/repos/versha0/';
  private url2 = '?access_token=e764590ec5b1e77ce1c4338d402d347ec8707c70';
  constructor(private http: HttpClient) { }
  deleteRepo(repoName: string) {
    return this.http.delete(this.url1 + repoName + this.url2);
    {
      console.log('deleted');
    }
  }
}
