import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout';

@NgModule({
  declarations: [
    LayoutComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    LayoutComponent,
  
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    
  ]
})
export class SharedModule {}
