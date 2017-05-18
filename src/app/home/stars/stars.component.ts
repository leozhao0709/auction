import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  totalRating = 5;

  @Input()
  rating = 0;

  zeroStars: boolean[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= this.totalRating; i++) {
      this.zeroStars.push(i > this.rating);
    }
  }

}
