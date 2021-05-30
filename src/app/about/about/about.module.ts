import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from '../about-page/about-page.component';
import {CustomMaterialModule} from '../../angular.custom.module';


@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule
  ]
})
export class AboutModule { }
