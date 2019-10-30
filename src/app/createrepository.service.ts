import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreaterepositoryService {
//  c55cb4406be0b12018f2d90f42d084d02db384a5=mytoken
  private url: string = 'https://api.github.com/user/repos?access_token=c55cb4406be0b12018f2d90f42d084d02db384a5';
  constructor(private http: HttpClient) { }
  createRepo(repoName: string, description: string) {
    return this.http.post(this.url,
      {
        'name': repoName,
        'description': description,
        homepage: 'https://github.com',
        'private': false,
        'has_issues': true,
        'has_projects': true,
        'has_wiki': true
      }
    );
  }
}
