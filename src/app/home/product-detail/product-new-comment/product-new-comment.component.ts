import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../shared/comment';
import { Product } from 'app/shared/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-new-comment',
  templateUrl: './product-new-comment.component.html',
  styleUrls: ['./product-new-comment.component.scss']
})
export class ProductNewCommentComponent implements OnInit {

  @Input()
  product: Product;

  newRating: number;
  newComment: Comment;

  constructor(private _productService: ProductService, ) {
    this.newRating = 5;
  }

  ngOnInit() {
  }

  /**
   * submitNewComment
   */
  public submitNewComment(element: HTMLTextAreaElement) {
    this.newComment = new Comment(0, this.product.id, new Date().toDateString(), 'someone', this.newRating, element.value);
    this._productService.addNewComment(this.newComment);

    // reset new rating
    this.newRating = 5;
    element.value = null;
  }
}
