import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistComponent } from './regist/regist.component';
import { IndexComponent } from './index/index.component';
import { ProprietaryCustomizationComponent } from './proprietary-customization/proprietary-customization.component';
import { ServicePackageComponent } from './service-package/service-package.component';
import { LoginComponent } from './login/login.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { RealCaseComponent } from './real-case/real-case.component';
import { ReserveComponent } from './reserve/reserve.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistComponent,
    IndexComponent,
    ProprietaryCustomizationComponent,
    ServicePackageComponent,
    LoginComponent,
    PageNotfoundComponent,
    PersonalCenterComponent,
    RealCaseComponent,
    ReserveComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
