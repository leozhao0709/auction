import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  title: string;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(
      (params: Params) => {
        this.title = params['title'];
      }
    );
  }

}
