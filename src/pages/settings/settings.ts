import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import { ServiceComponent } from '../../components/service/service';
import { TranslateService } from '@ngx-translate/core';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
private categoryList = [];
savedMessage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private service: ServiceComponent,translate: TranslateService, private viewCtrl: ViewController) {
      let defLng = 'en';
      translate.setDefaultLang(defLng);
      translate.use(defLng); 
    translate.get('SAVED_MESSAGE').subscribe((res: string) => {
      this.savedMessage = res;
    });
  }

  ionViewDidLoad() {
    this.getCategories();
  }

  ngDoCheck() {
    if(this.service.Categories.length!==0 && this.categoryList.length===0) {
      this.categoryList = this.service.Categories;
    }
  }

  getCategories() {
    this.service.checkNetwork('categories');
  }

  setCategory($event,myItem) {
    localStorage.setItem('category',myItem.id);
    localStorage.setItem('categoryName',myItem.name);
    this.service.ToastControl(this.savedMessage);
    this.service.getMyMeetUp(localStorage.getItem('category'));
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

}
