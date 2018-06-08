import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homepage: any;
  nextEvent: any;
  categoryName: any;
  numberOfEvents: string;

  constructor(public navCtrl: NavController, translate: TranslateService, private viewCtrl: ViewController) {
    let defLng = 'en';
    translate.setDefaultLang(defLng);
    translate.use(defLng);
    translate.get('HOMEPAGE_TITLE').subscribe((res: string) => {
      this.homepage = res;
    });

  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  ionViewDidLoad() {
    if (localStorage.getItem('categoryName') === null) {
      this.categoryName = "Current Category: None";
    } else {
      this.categoryName = "Current Category: " + localStorage.getItem('categoryName');
    }
    if (localStorage.getItem('numberOfEvents') !== null) {
      this.numberOfEvents = "Number of events: " + localStorage.getItem('numberOfEvents');
    } else {
      this.numberOfEvents = "Number of events: 0"
    }
  }

}
