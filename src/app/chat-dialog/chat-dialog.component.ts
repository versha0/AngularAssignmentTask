import { Component, OnInit } from '@angular/core';
import { ChatService} from '../chat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  public text;
  public speech;
  constructor(private chat: ChatService, private router: Router) { }

  ngOnInit() {

  }
  userData() {
    this.speech = this.chat.talk(this.text);
    // tslint:disable-next-line:triple-equals
    if (this.speech == 'Create component called') {
      this.router.navigateByUrl('/createRepository');

    }
  }
}
