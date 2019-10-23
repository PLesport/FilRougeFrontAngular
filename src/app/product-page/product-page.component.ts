import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product: Product;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      categoryService.getProductsById(Number(productId)).subscribe(result => {
       this.product = result;
     });
    });
  }

  ngOnInit() { }

}

