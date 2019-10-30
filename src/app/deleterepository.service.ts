import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleterepositoryService {
//  c55cb4406be0b12018f2d90f42d084d02db384a5=mytoken
  private url1 = 'https://api.github.com/repos/versha0/';
  private url2 = '?access_token=c55cb4406be0b12018f2d90f42d084d02db384a5';
  constructor(private http: HttpClient) { }
  deleteRepo(repoName: string) {
    return this.http.delete(this.url1 + repoName + this.url2);
    {
      console.log('deleted');
    }
  }
}
