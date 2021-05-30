import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPageComponent } from './client-page/client-page.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../shared.module';
import {CustomMaterialModule} from '../angular.custom.module';

@NgModule({
  declarations: [ClientPageComponent, ClientFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, CustomMaterialModule]
})
export class ClientModule {}
