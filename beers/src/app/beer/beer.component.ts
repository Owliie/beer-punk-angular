import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {Beer} from '../beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  beers: Beer[] = [];
  private headers: string[];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getBeers();
  }

  getBeers() {
    this.api.getBeers().subscribe(resp => {
      console.log(resp);

      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);

      for (const b of resp.body) {
        this.beers.push(b);
      }

      console.log(this.beers);
    });
  }

  search(value: string, $event: Event) {
    $event.preventDefault();

    this.beers = [];

    if (value.length === 0) {
      this.getBeers();
      return;
    }

    this.api.getBeerByName(value).subscribe(resp => {
      console.log(resp);

      for (const b of resp.body) {
        this.beers.push(b);
      }

      console.log(this.beers);
    });
  }
}
