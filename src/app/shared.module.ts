import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SearchFormComponent} from './search/search-form/search-form.component';
import {CustomMaterialModule} from './angular.custom.module';

@NgModule({
  declarations: [SearchFormComponent],
  imports: [CommonModule, FormsModule, CustomMaterialModule],
  exports: [SearchFormComponent, CustomMaterialModule],
})
export class SharedModule {}
