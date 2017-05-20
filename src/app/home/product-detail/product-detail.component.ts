import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/product.model';
import { ProductService } from '../services/product.service';
import { Comment } from '../../shared/comment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];

  constructor(private _route: ActivatedRoute, private _productService: ProductService, ) { }

  ngOnInit() {
    const id: number = +this._route.snapshot.params['id'];
    this.product = this._productService.getProduct(id);

    // this._route.params.subscribe(
    //   (params: Params) => {
    //     const id: number = params['id'];
    //     this.product = this._productService.getProduct(id);
    //   }
    // );

    this.comments = this._productService.getCommentsForProductId(id);
  }

}
