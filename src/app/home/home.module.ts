import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { StarsComponent } from './stars/stars.component';
import { HomeComponent } from './home.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselComponent } from './product-list/carousel/carousel.component';
import { ProductService } from './services/product.service';
import { ProductCommentComponent } from './product-detail/product-comment/product-comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProductListComponent,
    StarsComponent,
    CarouselComponent,
    HomeComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductCommentComponent,
    FilterPipe
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    ProductService
  ]
})
export class HomeModule { }
