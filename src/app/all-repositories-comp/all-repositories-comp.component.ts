import { Component, OnInit } from '@angular/core';
import {AllrepositoryService} from '../allrepository.service';

@Component({
  selector: 'app-all-repositories-comp',
  templateUrl: './all-repositories-comp.component.html',
  styleUrls: ['./all-repositories-comp.component.css']
})
export class AllRepositoriesCompComponent implements OnInit {
  public repos = [];
  constructor(private RepoService: AllrepositoryService) { }

  ngOnInit() {
    this.RepoService.getAllRepo().
    subscribe((data: any) => {
      this.repos = data;
      console.log(this.repos);
    });
  }

}
