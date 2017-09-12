/**
 * Created by Administrator on 2017/9/11 0011.
 */



import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
const routes: Routes = [
  {
    path:'index/:val',
    component:IndexComponent
  }

];

@NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {
}
