import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ServiceComponent } from '../../components/service/service';
import { TranslateService } from '@ngx-translate/core';
import { MessageserviceProvider } from '../../providers/messageservice/messageservice';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {
  meetUpList = [];
  categoryName:string;
  private subscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
    private service: ServiceComponent,translate: TranslateService,private messageService: MessageserviceProvider) {
      this.showMyMeetups();
      
  this.categoryName = this.service.categoryName;
  }

  ionViewDidLoad() {
    this.subscription = this.messageService.subscribe('meetups', (payload) => {
    if (payload !== '') {
      if(this.meetUpList.length === 0){
        this.meetUpList = payload;
        this.subscription.unsubscribe();
        sessionStorage.setItem('categoryName',localStorage.getItem('categoryName'));
      } 
      if(this.meetUpList.length!==0 ) {
       
        if((parseInt(localStorage.getItem('numberOfEvents')) !== this.meetUpList.length) ||
         localStorage.getItem('categoryName') !==sessionStorage.getItem('categoryName') ){
          this.meetUpList = payload;
          this.subscription.unsubscribe();
        }
      }
     
    }
  })
  }

  showMyMeetups() {
    this.service.checkNetwork('meetups');
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

}
