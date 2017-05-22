import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../home/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  categories: string[];

  constructor(private _productService: ProductService, ) {
    this.searchForm = new FormGroup({
      'title': new FormControl('', [Validators.minLength(3), Validators.required]),
      'price': new FormControl(null, [Validators.pattern(/^[1-9]\d*$/), Validators.required]),
      'category': new FormControl('-1')
    });

    this.categories = this._productService.getAllCategories();
  }

  ngOnInit() {
  }

  /**
   * onSearch
   */
  public onSearch() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
    } else {

    }
  }

}
