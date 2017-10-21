import { NgModule } from '@angular/core';

import { HomePageModule, 
        AccountPageModule, 
        AdminPageModule, 
        ProductsPageModule  } from '../pages/pages';
/**
 *
 *
 * @export
 * @class ContainersModule
 */
@NgModule({
  exports: [
    HomePageModule, 
    AccountPageModule, 
    AdminPageModule, 
    ProductsPageModule
  ],
  imports: [
    HomePageModule, 
    AccountPageModule, 
    AdminPageModule, 
    ProductsPageModule
  ],
  providers: []
})
export class PagesModule {}
