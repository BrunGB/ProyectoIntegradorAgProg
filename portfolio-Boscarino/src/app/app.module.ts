import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoARGPComponent } from './componentes/logo-argp/logo-argp.component';
import { SocialLogosComponent } from './componentes/social-logos/social-logos.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoARGPComponent,
    SocialLogosComponent,
    BannerComponent,
    SobreMiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
