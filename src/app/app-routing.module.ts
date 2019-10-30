import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {AllRepositoriesCompComponent} from './all-repositories-comp/all-repositories-comp.component';
import {CreaterepositoryService} from './createrepository.service';
import {CreaterepositoryComponent} from './createrepository/createrepository.component';
import {DeleterepositoryComponent} from './deleterepository/deleterepository.component';
import {ParentComponentComponent} from './parent-component/parent-component.component';
const routes: Routes = [
  { path : 'allRepository', component: AllRepositoriesCompComponent},
  { path : 'createRepository', component: CreaterepositoryComponent},
  { path : 'deleteRepository', component: DeleterepositoryComponent},
  {path : '**', component: ParentComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingcomponents = [AllRepositoriesCompComponent, CreaterepositoryComponent, DeleterepositoryComponent];

