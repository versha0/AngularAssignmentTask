import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.dialogflow.GitBot;
  readonly client = new ApiAiClient({accessToken: this.token});
  public speech;
  speechSource = new BehaviorSubject('');
  currentSpeech = this.speechSource.asObservable();

  constructor() { }
  talk(text: string) {
    this.client.textRequest(text)
      .then
      (data => {
        this.speech = data.result.fulfillment.speech;
        console.log(this.speech);
        this.speechSource.next(this.speech);
  });

}}
