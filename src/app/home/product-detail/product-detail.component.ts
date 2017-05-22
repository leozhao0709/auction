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

  isNewCommentHidden = true;

  constructor(private _route: ActivatedRoute, private _productService: ProductService, ) {
    const id: number = +this._route.snapshot.params['id'];
    this.product = this._productService.getProduct(id);
    this.comments = this._productService.getCommentsForProductId(id);

    this._productService.newCommentSubmit.subscribe(
      (productid: number) => {
        if (productid === id) {
          this.comments = this._productService.getCommentsForProductId(productid);
          this.isNewCommentHidden = true;

          const totalRating = this.comments.reduce(
            (sum, comment) => {
              return sum + comment.rating;
            }, 0);
          this.product.rating = totalRating / this.comments.length;
        }
      }
    );
  }

  ngOnInit() {
  }

}
