import { Component, OnInit } from '@angular/core';
import { Product } from 'app/shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品,是在练习慕课网angular入门实战时创建的', ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品,是在练习慕课网angular入门实战时创建的', ['图书', '硬件设备']),
      new Product(3, '第三个商品', 3.99, 4.5, '这是第三个商品,是在练习慕课网angular入门实战时创建的', ['硬件设备']),
      new Product(4, '第四个商品', 4.99, 2.5, '这是第四个商品,是在练习慕课网angular入门实战时创建的', ['电子产品']),
      new Product(5, '第五个商品', 5.99, 1.5, '这是第五个商品,是在练习慕课网angular入门实战时创建的', ['电子产品', '图书']),
      new Product(6, '第六个商品', 6.99, 3.5, '这是第六个商品,是在练习慕课网angular入门实战时创建的', ['电子产品', '硬件设备', '图书']),
    ];
  }

}
