import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  favourites: number[] = [];

  constructor() { }

  ngOnInit() {
    this.favourites = history.state.data;
    console.log(this.favourites);
  }


}
