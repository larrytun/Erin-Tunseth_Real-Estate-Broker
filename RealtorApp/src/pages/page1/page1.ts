import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { FeaturedPage } from '../featured/featured';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  page2 = Page2;
  featuredPage = FeaturedPage;




  constructor(public navCtrl: NavController) {

  }

}
