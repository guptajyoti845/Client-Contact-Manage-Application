import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientPageComponent} from './clients/client-page/client-page.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientPageComponent,
  },
  {
    path: '',
    redirectTo: '/clients',
    pathMatch: 'full',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
