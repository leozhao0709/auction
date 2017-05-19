import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { StarsComponent } from './stars/stars.component';
import { HomeComponent } from './home.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselComponent } from './product-list/carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    ProductListComponent,
    StarsComponent,
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
