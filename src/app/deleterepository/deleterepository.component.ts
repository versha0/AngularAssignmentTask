import { Component, OnInit } from '@angular/core';
import {DeleterepositoryService} from '../deleterepository.service';

@Component({
  selector: 'app-deleterepository',
  templateUrl: './deleterepository.component.html',
  styleUrls: ['./deleterepository.component.css']
})
export class DeleterepositoryComponent implements OnInit {

  constructor(private DeleteService: DeleterepositoryService) { }
  public repoName;
  ngOnInit() {
  }
  deleteRepo() {
    this.DeleteService.deleteRepo(this.repoName).
    subscribe( data => {
      console.log(data);
    });
  }

}
