import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [NavbarComponent, FooterComponent, SearchComponent],
  exports: [
    NavbarComponent,
    FooterComponent,
    SearchComponent
  ]
})
export class GlobalModule { }
