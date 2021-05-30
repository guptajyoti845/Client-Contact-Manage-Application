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
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent, NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ClientModule,
    CompanyModule,
    AboutModule,
    SharedModule
  ],
  providers: [CanActivateViaAuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
