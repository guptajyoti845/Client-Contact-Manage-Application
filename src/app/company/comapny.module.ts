import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyPageComponent } from './company-page/company-page.component';
import {RouterModule, Routes} from '@angular/router';
import {CanActivateViaAuthGuard} from '../CanActivateViaAuthGuard';

const routes: Routes = [
  {
    path: 'company/new',
    component: CompanyPageComponent,
    canActivate: [
      CanActivateViaAuthGuard
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    CompanyPageComponent
  ],
})
export class CompanyModule {}
