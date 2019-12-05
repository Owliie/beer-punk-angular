import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {

  starred: number[] = [];

  constructor() { }

  addStar(id: number) {
    console.log(id);
    console.log('star added!');
    if (this.starred.includes(id)) {
      console.log('star removed');
      console.log(this.starred);
      this.starred.splice(this.starred.indexOf(id), 1);
      return;
    }

    this.starred.push(id);
  }
}
