import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  images = [{
    image1: 'test1',
    image2: 'test2',
    image3: 'test3',
    image4: 'test4',
    image5: 'test5',
    image6: 'test6'
  }]

  grid = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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

  ionViewLoaded(){
    

  }

}
