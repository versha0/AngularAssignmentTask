import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ChatService} from '../chat.service';
import {ChatDialogComponent} from '../chat-dialog/chat-dialog.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  // public str;
  // public text;



  // greetUser() {
  //   this.str = this.text.toLowerCase();
  //   // tslint:disable-next-line:max-line-length
  //   if ((this.str.includes('create') && this.str.includes('repository')) || (this.str.includes('make') && this.str.includes('repository')) || (this.str.includes('produce') && this.str.includes('repository'))) {
  //     // console.log(this.text);
  //     this.router.navigateByUrl('/createRepository');
  //     // tslint:disable-next-line:max-line-length
  //   } else if ((this.str.includes('delete') && this.str.includes('repository')) || (this.str.includes('remove') && this.str.includes('repository'))) {
  //     this.router.navigateByUrl('/deleteRepository');
  //     // tslint:disable-next-line:max-line-length
  //   } else if ((this.str.includes('show') && this.str.includes('repository')) || (this.str.includes('get all') && this.str.includes('repository'))) {
  //     this.router.navigateByUrl('/allRepository');
  //   } else {
  //     alert('Please type correct input');
  //   }
  // }
  public text;
  public speech;

  constructor(private chat: ChatService, private router: Router) { }

  ngOnInit() {
    this.chat.currentSpeech.subscribe(
      speech => {
        this.speech = speech;
        // tslint:disable-next-line:triple-equals
        if (this.speech == 'Create component called') {
          this.router.navigateByUrl('/createRepository');

          // tslint:disable-next-line:triple-equals
        } else if (this.speech == 'Delete Component Called') {
          this.router.navigateByUrl('/deleteRepository');

          // tslint:disable-next-line:triple-equals
        } else if (this.speech == 'Allrepo Component Called') {
          this.router.navigateByUrl('/allRepository');

        } else {
          alert(this.speech);
        }

      }
    );

  }
  userData() {
    this.speech = this.chat.talk(this.text);

  }
}
