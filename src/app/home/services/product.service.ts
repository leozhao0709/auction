import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../../shared/product.model';
import { Comment } from '../../shared/comment';

@Injectable()
export class ProductService {

  productsChanged = new EventEmitter<Product[]>();
  newCommentSubmit = new EventEmitter<number>();

  private _products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品,是在练习慕课网angular入门实战时创建的', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品,是在练习慕课网angular入门实战时创建的', ['图书', '硬件设备']),
    new Product(3, '第三个商品', 3.99, 4.5, '这是第三个商品,是在练习慕课网angular入门实战时创建的', ['硬件设备']),
    new Product(4, '第四个商品', 4.99, 2.5, '这是第四个商品,是在练习慕课网angular入门实战时创建的', ['电子产品']),
    new Product(5, '第五个商品', 5.99, 1.5, '这是第五个商品,是在练习慕课网angular入门实战时创建的', ['电子产品', '图书']),
    new Product(6, '第六个商品', 6.99, 3.5, '这是第六个商品,是在练习慕课网angular入门实战时创建的', ['电子产品', '硬件设备', '图书']),
  ];

  private _comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 22:22:22', '张三', 3, '东西不错'),
    new Comment(2, 1, '2017-03-03 23:22:22', '李四', 4, '东西是不错'),
    new Comment(3, 1, '2017-04-03 21:22:22', '王五', 2, '东西还不错'),
    new Comment(4, 2, '2017-05-02 20:22:22', '赵六', 4, '东西挺不错'),
  ];

  constructor() { }

  /**
   * getAllCategories
   */
  public getAllCategories(): string[] {
    return ['电子产品', '硬件设备', '图书'];
  }

  public getProducts(): Product[] {
    return this._products.slice();
  }

  /**
   * getProduct
   */
  public getProduct(id: number): Product {
    return this._products.slice().find(
      (product: Product): boolean => {
        return id === product.id;
      }
    );
  }

  /**
   * getCommentsForProductId
   */
  public getCommentsForProductId(id: number): Comment[] {
    return this._comments.slice().filter(
      (comment: Comment) => {
        return comment.productId === id;
      }
    );
  }

  /**
   * addNewComment
   */
  public addNewComment(comment: Comment) {
    this._comments.unshift(comment);
    this.newCommentSubmit.emit(comment.productId);
  }

}
