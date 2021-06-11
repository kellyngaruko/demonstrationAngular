import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material';


@NgModule({
  declarations: [
    NewsComponent,

  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NewsRoutingModule,
    MaterialModule,
  ]
})
export class NewsModule {}
