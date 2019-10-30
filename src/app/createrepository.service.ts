import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreaterepositoryService {
// e764590ec5b1e77ce1c4338d402d347ec8707c70=mytoken
  private url: string = 'https://api.github.com/user/repos?access_token=e764590ec5b1e77ce1c4338d402d347ec8707c70';
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
