import { NgModule } from '@angular/core';
import { ServiceComponent } from './service/service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ServiceComponent],
	imports: [TranslateModule.forChild()],
	exports: [ServiceComponent]
})
export class ComponentsModule {}
