import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsService } from '../../services/product.service';
import { UsersService } from '../../services/user.service';

import { AllProducts } from '../../models/AllProducts';
import { Category } from '../../models/Category';
import { Product } from '../../models/Product';
import { User } from '../../models/User';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit{
  images = [{
    image1: 'test1',
    image2: 'test2',
    image3: 'test3',
    image4: 'test4',
    image5: 'test5',
    image6: 'test6'
  }]
  Products: Product[];

  grid = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private svc: ProductsService) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HomePage');
    
    let rowNum = 0; //counter to iterate over the rows in the grid
      for (let i = 0; i < this.images.length; i+=2) { //iterate images
        this.grid[rowNum] = Array(2); //declare two elements per row
        if (this.images[i]) { //check file URI exists
          this.grid[rowNum][0] = this.images[i] //insert image
        }
        if (this.images[i+1]) { //repeat for the second image
          this.grid[rowNum][1] = this.images[i+1]
        }
        rowNum++; //go on to the next row
      }
  }

  ngOnInit() {
    this.svc.getProducts().subscribe(prod => {
      this.Products = prod;
      console.log(prod.data)
    });
  }

}
