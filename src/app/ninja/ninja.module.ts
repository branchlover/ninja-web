import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NinjaRoutingModule } from './ninja-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NinjaRoutingModule,
    SharedModule
  ]
})
export class NinjaModule { }
