import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientPageComponent} from './clients/client-page/client-page.component';
import {CompanyPageComponent} from './company/company-page/company-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AboutPageComponent} from './about/about-page/about-page.component';
import {CanActivateViaAuthGuard} from './CanActivateViaAuthGuard';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientPageComponent,
    canActivate: [
      CanActivateViaAuthGuard
    ]
  },
  {
    path: 'client',
    redirectTo: '/clients',
    pathMatch: 'full',
  },
  {
    path: 'company',
    component: CompanyPageComponent,
  },
  {
    path: 'clients/:id',
    component: ClientPageComponent
  },
  {
    path: '',
    redirectTo: '/clients',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
