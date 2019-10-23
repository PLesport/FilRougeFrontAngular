import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../category.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { IAlert } from '../ialert';
import { SharedService } from '../shared.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

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
  inputCtrl: FormControl;
  boxCtrl: FormControl;
  availableValues: Product[];
  displayValues: Product[];
  subs: Subscription;
  productModel = new Product('', '', '', '', '', '', 0, 0, 0, '', 'miawoo');

  ngOnInit() {
    this.subs = new Subscription();
    this.inputCtrl = new FormControl('');
    this.boxCtrl = new FormControl('');
    this.categoryService.getProducts().subscribe(products => {
      this.availableValues = products;
      this.displayValues = products;
    });
    this.subs.add(
    this.inputCtrl.valueChanges.subscribe(value => {
        this.displayValues = this.filterValues(value, this.availableValues, 'description');
        // "name" : le nom de l'attribut de l'objet Product qui doit matcher
      }).add(
    this.boxCtrl.valueChanges.subscribe(value => {
        this.displayValues = this.filterValuesByType(value, this.availableValues, 'type');
        })
      )
    );
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
    this.cartItemCount = this.productAddedTocart.length;
    this.sharedService.updateCartCount(this.cartItemCount);
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
}
  filterValues(value: string, availableValues: Product[], attribute): Product[] {
    return availableValues.filter(availableValue => availableValue[attribute].indexOf(value) !== -1);
  }

  filterValuesByType(value: string, availableValues: Product[], attribute): Product[] {
    return availableValues.filter(availableValue => availableValue[attribute].indexOf(value) !== -1);
  }
  onSubmit() {
    this.categoryService.postProduct(this.productModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.log('Error!', error)
    );
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
