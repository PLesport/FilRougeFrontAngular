import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { Product } from '../product';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  availableValues: Product[];
  displayValues: Product[];
  p = 1;
  count = 9;


  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.categoryService.getProducts()
    .pipe(map(products => products.sort((a: Product, b: Product) => a.id - b.id)))
    .subscribe(products => {
      this.availableValues = products;
      this.displayValues = products;
    });
  }

  

}
