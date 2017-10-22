import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from "../pages/pages";
// import { AllProducts } from '../models/AllProducts';
import { ProductsService } from '../services/product.service';
import { Category } from '../models/Category';
import { UsersService } from '../services/user.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  public menuList: Array<{ icon: string; 
                            title: string;
                            name: string; 
                            content: Array<{ 
                                      title: string; 
                                      name: string }>}>;
  public pages: Array<{ title: string; name: string }> = [];
  public visibleList: Array<number> = [];
  public userInfo: { name: string; position: string, url: string };
  Categories: Category[] = [];

  rootPage: any = HomePage;
  showSubmenu: boolean = false;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private svc: ProductsService,
              private usersvc: UsersService,
              private menu: MenuController) {
    this.initializeApp();
    this.createMainmenu();
  }

  public toggleList(i: number, obj: any): void {
    this.visibleList[i] = this.visibleList[i] ? 0 : 1;
    // if (this.menuList.filter(page => 
    //     page.title === obj.name)){
    let pageholder = this.menuList.filter(page => page.title === obj);
    if (pageholder[0].content === null){
      this.nav.setRoot(pageholder[0].name);
      this.menu.close();
    }
    // } 
  }

  menuItemHandler(): void {
      this.showSubmenu = !this.showSubmenu;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getCategories() {
    this.svc.getCategories().subscribe(cat => {
      for(const ctg of cat){
        this.pages.push({title: ctg.name, name: 'ProductsPage'});
        }
    });
  }

  goToHome(){
    this.nav.setRoot(HomePage)
  }

  public openPage(page: any): void {
    this.nav.setRoot(page.name);
    this.menu.close();
  }

  // openPage(page) {
  //   this.nav.push(page.component);
  // }

  //this code is a modified version from the AR2 reference app
  private createMainmenu(): void {
    this.getCategories();
    // set categories pages using the database
    
    // set menu contents
    this.menuList = [
      {
        icon: 'md-home',
        title: 'Home',
        name: 'HomePage',
        content: null
      },
      {
        icon: 'md-speedometer',
        title: 'Categories',
        name: '',
        content: this.pages
      },
      {
        icon: 'md-paper',
        title: 'All Products',
        name: 'ProductsPage',
        content: null
      },
      {
        icon: 'md-contact',
        title: 'Account',
        name: 'AccountPage',
        content: null
      },
      {
        icon: 'md-construct',
        title: 'Admin Settings',
        name: '',
        content: [{
                  title: 'Admin Categories',
                  name: 'AdminCategoriesPage'
                },
                {
                  title: 'Admin Products',
                  name: 'AdminProductsPage'
                }]
      }
    ];
    // set menu toggle list
    this.menuList.forEach(() => {
      this.visibleList.push(0);
    });
    // set login user info
    // *** should get from service
    console.log('user is authenticated?: ',this.usersvc.isAuthenticated);
    console.log(localStorage.getItem('mystore.cred'));
    // this.usersvc.getUsers().subscribe({user => 
    //   this.userInfo.name = user.name;
    // });

    this.userInfo = {
      name: 'Guest',
      position: 'not signed-in',
      url: '../assets/icon/favicon.ico'
    }
  }
}
