import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {game} from '../game';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient) {
  }

  public totalScore: string;
  public playerName1: string;

  private url = 'http://localhost:8080/api/players';

  myMethod(data: string, player) {
    // console.log(data);
    // console.log(player);
    this.totalScore = data;
    this.playerName1 = player;
  }

  get() {
    return this.playerName1;
  }

  getAllPlayer(): Observable<any> {
    return this.http.get(this.url);
  }

  post(playerName: string, score: string) {
    // console.log(totalScore);
    // console.log(playerName1);
    console.log('helllo');
    return this.http.post(this.url, {
      playerName,
      score
    });
  }
}
