import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsDisplayComponent } from './news-display.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material';


@NgModule({
  declarations: [
    NewsDisplayComponent,

  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    NewsDisplayComponent,
    MaterialModule,
    FormsModule
  ],
})
export class NewsDisplayModule {}
