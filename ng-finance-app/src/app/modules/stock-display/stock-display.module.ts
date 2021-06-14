import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockDisplayComponent } from './stock-display.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material';


@NgModule({
  declarations: [
    StockDisplayComponent,

  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    StockDisplayComponent,
    MaterialModule,
    FormsModule
  ],
})
export class StockDisplayModule {}
