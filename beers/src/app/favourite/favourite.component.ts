import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {Beer} from '../beer';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  favouritesIds: number[] = [];
  faveBeers: Beer[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.favouritesIds = history.state.data as number[];
    console.log(this.favouritesIds);

    if (this.favouritesIds != null) {
      this.getFaves();
    }
  }

  getFaves() {
    for (const id of this.favouritesIds) {
      this.api.getBeerById(id).subscribe(data => {
        console.log(data);
        this.faveBeers.push(data.body[0]);
      });
    }
  }
}
