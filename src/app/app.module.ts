import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SubFooterComponent } from './sub-footer/sub-footer.component';
import { SearchComponent } from './search/search.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {FormsModule} from '@angular/forms'
import { SearchServiceService } from './search-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SubFooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
