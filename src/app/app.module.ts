import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClientModule} from './clients/client.module';
import {CompanyModule} from './company/comapny.module';
import {SharedModule} from './shared.module';
import {CustomMaterialModule} from './angular.custom.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AboutModule} from './about/about/about.module';
import {CanActivateViaAuthGuard} from './CanActivateViaAuthGuard';
import {AuthService} from './auth.service';


@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent, NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClientModule,
    CompanyModule,
    SharedModule,
    CustomMaterialModule,
    AboutModule
  ],
  providers: [CanActivateViaAuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
