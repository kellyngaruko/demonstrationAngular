import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WatchlistRoutingModule } from './watchlist-routing.module';
import { WatchlistComponent } from './watchlist.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material';


@NgModule({
  declarations: [
    WatchlistComponent,

  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    WatchlistRoutingModule,
    MaterialModule,
  ]
})
export class WatchlistModule {}
