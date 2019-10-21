import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  products: Product[] = [];
  allFiltered: Product[] = [];

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
     this.categoryService.getProducts().subscribe(result => {
      console.log(result);
      this.allFiltered = result;
      return;
    });
  }

  onChange(query: String) {
    this.categoryService.getProductsByKeyword(query).subscribe(result => {
      console.log(result);
      this.allFiltered = result;
      return;
    });
  }

//   selectProduct(product: product): void{
// console.log('Vous avez choisi le produit : ' + product.name);
// let link = ['/products' ,  product.id];
// this.router.navigate(link);
//   }
}
