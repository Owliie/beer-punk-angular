import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';
import {StarComponent} from './star/star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private star: StarComponent) {}

  title = 'Beans Love Beers';

  ngOnInit(): void {
  }
}
