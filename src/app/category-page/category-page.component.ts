import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Product } from '../product';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  products: Product[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
     this.categoryService.getProducts().subscribe(result => {
      console.log(result);
      this.products = result;
      return;
    });
  }
}
