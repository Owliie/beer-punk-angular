import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BeerComponent } from './beer/beer.component';
import { StarComponent } from './star/star.component';
import { FavouriteComponent } from './favourite/favourite.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'favourites', component: FavouriteComponent},
  {path: 'beer', component: BeerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    StarComponent,
    FavouriteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
