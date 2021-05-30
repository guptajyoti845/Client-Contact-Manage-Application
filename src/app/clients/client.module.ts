import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPageComponent } from './client-page/client-page.component';
import { ClientFormComponent } from './client-form/client-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared.module';
import { CustomMaterialModule } from '../angular.custom.module';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from '../CanActivateViaAuthGuard';
import { ClientSearchPageComponent } from './client-search-page/client-search-page.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsPageComponent } from './client-details-page/client-details-page.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientEditPageComponent } from './client-edit-page/client-edit-page.component';

const routes: Routes = [
  {
    path: 'clients/new',
    component: ClientPageComponent,
    canActivate: [
      CanActivateViaAuthGuard
    ]
  },
  {
    path: 'clients/search',
    component: ClientSearchPageComponent
  },
  {
    path: 'clients/details/:id',
    component: ClientDetailsPageComponent
  },
  {
    path: 'clients/edit/:id',
    component: ClientEditPageComponent
  }
];
@NgModule({
  declarations: [ClientPageComponent,
    ClientFormComponent,
    ClientSearchPageComponent,
    ClientListComponent,
    ClientDetailsPageComponent,
    ClientDetailComponent,
    ClientEditPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CustomMaterialModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ClientModule {}
