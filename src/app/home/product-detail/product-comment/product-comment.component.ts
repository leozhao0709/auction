import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../shared/comment';

@Component({
  selector: 'app-product-comment',
  templateUrl: './product-comment.component.html',
  styleUrls: ['./product-comment.component.scss']
})
export class ProductCommentComponent implements OnInit {

  @Input()
  comment: Comment;

  constructor() { }

  ngOnInit() {
  }

}
