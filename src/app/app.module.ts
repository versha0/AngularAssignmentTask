import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AllRepositoriesCompComponent } from './all-repositories-comp/all-repositories-comp.component';
import {AllrepositoryService} from './allrepository.service';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import {HttpClientModule} from '@angular/common/http';
import { DeleterepositoryComponent } from './deleterepository/deleterepository.component';
import {DeleterepositoryService} from './deleterepository.service';
import {FormsModule} from '@angular/forms';
import { CreaterepositoryComponent } from './createrepository/createrepository.component';
import {CreaterepositoryService} from './createrepository.service';
import {ChildActivationEnd, RouterModule, Routes} from '@angular/router';
import {AppRoutingModule, routingcomponents} from './app-routing.module';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import {ChatService} from './chat.service';

const routes: Routes = [
  {path: '1', component: ParentComponentComponent},
  {path: 'child', component: ParentComponentComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    AllRepositoriesCompComponent,
    ParentComponentComponent,
    DeleterepositoryComponent,
    CreaterepositoryComponent,
    routingcomponents,
    ChatDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [AllrepositoryService,
  DeleterepositoryService,
  CreaterepositoryComponent,
  ChatService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
