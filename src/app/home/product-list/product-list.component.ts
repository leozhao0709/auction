import { Component, OnInit } from '@angular/core';
import { Product } from 'app/shared/product.model';
import { ProductService } from '../services/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  keyword: string;

  titleFilter: FormControl = new FormControl();

  constructor(private _productService: ProductService, ) {
  }

  ngOnInit() {
    this.products = this._productService.getProducts();

    this.titleFilter.valueChanges
      // .debounceTime(500)
      .subscribe(
      (value) => {
        this.keyword = value;
      }
      );
  }

}
