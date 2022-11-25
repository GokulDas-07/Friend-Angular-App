import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';

const routes: Routes = [
  {path:"",component:AddFriendComponent},
  {path:"search",component:SearchFriendComponent},
  {path:"view",component:ViewFriendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
