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

  @Input()
  readonly = true;

  constructor() { }

  ngOnInit() {
    this.showStar(this.rating, this.totalRating);
  }

  private showStar(currentRate: number, totalRates: number) {
    this.zeroStars = [];
    for (let i = 1; i <= totalRates; i++) {
      this.zeroStars.push(i > currentRate);
    }
  }

  starClick(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.showStar(this.rating, this.totalRating);
    }
  }

}
