import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchlistComponent } from './watchlist.component';

const routes: Routes = [{ path: 'watchlist', component: WatchlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchlistRoutingModule {}
