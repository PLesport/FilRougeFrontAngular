import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ProductOrder } from '../product-order';
import { ProductOrders } from '../product-orders';
import { Subscription } from 'rxjs';
import { EcommerceService } from '../ecommerce.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  getProductIndex: any;

  constructor(private categoryService: CategoryService, private router: Router, private ecommerceService: EcommerceService) { }

  products: Product[] = [];
  productOrders: ProductOrder[] = [];
  selectedProductOrder: ProductOrder;
  private shoppingCartOrders: ProductOrders;
  sub: Subscription;
  productSelected: boolean = false;
  allFiltered: Product[] = [];

  ngOnInit() {
     this.categoryService.getProducts().subscribe(result => {
      console.log(result);
      this.allFiltered = result;
      return;
    });
     this.productOrders = [];
     this.loadProducts();
     this.loadOrders();
  }
  loadProducts() {
    this.ecommerceService.getAllProducts()
            .subscribe(
                (products: any[]) => {
                    this.products = products;
                    this.products.forEach(product => {
                        this.productOrders.push(new ProductOrder());
                    });
                },
                (error) => console.log(error)
            );
    }

  loadOrders() {
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders.productOrders = this.productOrders;
  });
  }

  onChange(query: String) {
    this.categoryService.getProductsByKeyword(query).subscribe(result => {
      console.log(result);
      this.allFiltered = result;
      return;
    });
  }
  addToCart(order: ProductOrder) {
    this.selectedProductOrder = order;
    this.selectedProductOrder = this.selectedProductOrder;
    this.productSelected = true;
}

  removeFromCart(productOrder: ProductOrder) {
    const index = this.getProductIndex(productOrder.product);
    if (index > -1) {
        this.shoppingCartOrders.productOrders.splice(
            this.getProductIndex(productOrder.product), 1);
    }
    this.ecommerceService.orders = this.shoppingCartOrders;
    this.shoppingCartOrders.productOrders = this.productOrders;
    this.productSelected = false;
}

  reset() {
    this.productOrders = [];
    this.loadProducts();
    this.ecommerceService.productOrder.productOrders = [];
    this.loadOrders();
    this.productSelected = false;
  }

//   selectProduct(product: product): void{
// console.log('Vous avez choisi le produit : ' + product.name);
// let link = ['/products' ,  product.id];
// this.router.navigate(link);
//   }
}
