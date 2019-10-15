import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  products = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
     this.categoryService.getProducts().subscribe(result => {
     return this.products.push(result);

    });


  }

}
