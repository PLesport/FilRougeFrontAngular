import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductOrders } from '../product-orders';
import { Subscription } from 'rxjs';
import { EcommerceService } from '../ecommerce.service';
import { ProductOrder } from '../product-order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  [x: string]: any;
  orderFinished: boolean;
  orders: ProductOrders;
  total: number;
  sub: Subscription;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onOrderFinished: EventEmitter<boolean>;
  calculateTotal: any;

  constructor(private ecommerceService: EcommerceService) {
      this.total = 0;
      this.orderFinished = false;
      this.onOrderFinished = new EventEmitter<boolean>();
  }

  ngOnInit() {
      this.orders = new ProductOrders();
      this.loadCart();
      this.loadTotal();
  }

  loadTotal() {
      this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
          this.total = this.calculateTotal(this.orders.productOrders);
      });
  }

  loadCart() {
      this.sub = this.ecommerceService.ProductOrderChanged.subscribe(() => {
          const productOrder = this.CategoryPageComponent.SelectedProductOrder;
          if (productOrder) {
              this.orders.productOrders.push(new ProductOrder());
          }
          this.ProductOrders.EcommerceService = this.orders;
          this.orders = this.ProductOrders.ecommerceService;
          this.total = this.calculateTotal(this.orders.productOrders);
      });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  finishOrder() {
    this.orderFinished = true;
    this.ecommerceService.total = this.total;
    this.onOrderFinished.emit(this.orderFinished);
}

reset() {
    this.orderFinished = false;
    this.orders = new ProductOrders();
    this.orders.productOrders = [];
    this.loadTotal();
    this.total = 0;
}
}
