import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/shared/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}