import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BeerComponent } from './beer/beer.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
