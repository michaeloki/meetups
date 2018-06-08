import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupsPage } from './groups';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    GroupsPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupsPage),
    TranslateModule.forChild()
  ],
  exports: [
    GroupsPage
  ]
})
export class GroupsPageModule {}
