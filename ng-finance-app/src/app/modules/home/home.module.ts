import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material';


@NgModule({
  declarations: [
    HomeComponent,
    
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HomeRoutingModule,
    MaterialModule,
  ]
})
export class HomeModule {}
