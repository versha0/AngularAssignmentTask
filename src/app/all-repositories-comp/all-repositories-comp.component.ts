import {Component, OnInit} from '@angular/core';
import {AllrepositoryService} from '../allrepository.service';
import {MainService} from '../main.service';

@Component({
  selector: 'app-all-repositories-comp',
  templateUrl: './all-repositories-comp.component.html',
  styleUrls: ['./all-repositories-comp.component.css']
})
export class AllRepositoriesCompComponent implements OnInit {
  public repos = [];

  constructor(
    private RepoService: AllrepositoryService,
    private mainService: MainService) {
  }

  ngOnInit() {
    this.RepoService.getAllRepo().subscribe((data: any) => {
      this.repos = data;
      console.log(this.repos);
      this.postAll();
    });
    this.mainService.getAllPlayer().subscribe(
      data => {
        console.log(data);
      }
    );
  }

  private postAll() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.repos.length; i++) {
      const rep = this.repos[i];
      console.log(rep);
      this.mainService.post(rep.name, rep.created_at).subscribe(
        (versha) => {
          console.log(versha);
        }
      );
    }
  }

}
