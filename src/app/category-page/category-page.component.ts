import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../category.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { IAlert } from '../ialert';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  getProductIndex: any;

  public alerts: Array<IAlert> = [];
  cartItemCount = 0;
  @Output() cartEvent = new EventEmitter<number>();
  public globalResponse: any;
  yourByteArray: any;
  allProducts: CategoryPageComponent[];
  productAddedTocart: Product[];

  constructor(private categoryService: CategoryService, private router: Router, private sharedService: SharedService) { }

  allFiltered: Product[] = [];

  ngOnInit() {
     this.categoryService.getProducts().subscribe(result => {
      console.log(result);
      this.allFiltered = result;
      return;
    });
  }

  onChange(query: string) {
    this.categoryService.getProductsByKeyword(query).subscribe(result => {
      console.log(result);
      this.allFiltered = result;
      return;
    });
  }

  OnAddCart(product: Product) {
    console.log(product);

    this.productAddedTocart = this.categoryService.getProductFromCart();
    if (this.productAddedTocart === null) {
      this.productAddedTocart = [];
      this.productAddedTocart.push(product);
      this.categoryService.addProductToCart(this.productAddedTocart);
      this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Product added to cart.'
      });
      setTimeout(() => {
        this.closeAlert(this.alerts);
   }, 3000);

    } else {
      const tempProduct = this.productAddedTocart.find(p => p.id === product.id);
      if (tempProduct === null) {
        this.productAddedTocart.push(product);
        this.categoryService.addProductToCart(this.productAddedTocart);
        this.alerts.push({
          id: 1,
          type: 'success',
          message: 'Product added to cart.'
        });
        //setTimeout(function(){ }, 2000);
        setTimeout(() => {
          this.closeAlert(this.alerts);
     }, 3000);
      } else {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: 'Product already exist in cart.'
        });
        setTimeout(() => {
          this.closeAlert(this.alerts);
     }, 3000);
      }

    }
    //console.log(this.cartItemCount);
    this.cartItemCount = this.productAddedTocart.length;
    // this.cartEvent.emit(this.cartItemCount);
    this.sharedService.updateCartCount(this.cartItemCount);
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
}
}
