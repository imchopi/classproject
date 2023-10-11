import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
