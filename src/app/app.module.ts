import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage, AccountPage, AdminPage, ProductsPage  } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductsService } from '../services/product.service';
import { UsersService } from '../services/user.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsPage,
    AccountPage,
    AdminPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsPage,
    AccountPage,
    AdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsersService,
    ProductsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
