import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { StarsComponent } from './stars/stars.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductListComponent,
    StarsComponent,
    SearchComponent,
    CarouselComponent,
    HomeComponent,
    ProductItemComponent,
    ProductDetailComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
