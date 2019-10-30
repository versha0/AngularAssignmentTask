import { Component, OnInit } from '@angular/core';
import {CreaterepositoryService} from '../createrepository.service';
import {MainService} from '../main.service';

@Component({
  selector: 'app-createrepository',
  templateUrl: './createrepository.component.html',
  styleUrls: ['./createrepository.component.css']
})
export class CreaterepositoryComponent implements OnInit {

  constructor(private createService: CreaterepositoryService, private mainService: MainService) { }
  public repoName;
  public repoDesc;
  ngOnInit() {

  }
  createRepo() {
    this.createService.createRepo(this.repoName, this.repoDesc).
    subscribe( data => {
      console.log('data');
      console.log(data);
      
    });
  }

}
