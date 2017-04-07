import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import {RouterModule} from '@angular/router';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';


import { AppComponent } from './app.component';
import {appRoutes} from './app.routes';
import {UserLoginService} from './user/user-login/user-login.service';
import {UserLoginComponent} from './user/user-login/user-login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IndexComponent} from './index/index.component';
import {CarouselComponent} from './index/carousel/carousel.component';
import {DeclarationComponent} from './index/declaration/declaration.component';
import {IndexTagsComponent} from './index/tags/tags.component';
import {PatentListComponent} from './patent/list/list.component';
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    IndexComponent,
    CarouselComponent,
    DeclarationComponent,
    IndexTagsComponent,
    PatentListComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    RouterModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    UserLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
