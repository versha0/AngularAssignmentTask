import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { }

@Injectable({
  providedIn: 'root'
})
export class CreaterepositoryService {
//  7d872f8865adca90f948f334f25b91638aac26e1=mytoken
  private url: string = 'https://api.github.com/user/repos';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Token bd8b8277536b6e160afc70832c839d6f5c0acde8'
    })
  }

  createRepo(repoName: string, description: string) {
    return this.http.post(this.url,
      {
        'name': repoName,
        'description': description,
        'private': false
      }, this.httpOptions
    );
  }
}
