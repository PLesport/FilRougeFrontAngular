import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';
import { Orders } from '../orders';
import { EcommerceService } from '../ecommerce.service';
import { ProductOrders } from '../product-orders';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: ProductOrders[] = [];
  paid: boolean;
  sub: any;
  loadTotal: any;

  constructor(private orderService: OrdersService, private router: Router, private ecommerceService: EcommerceService) {
    this.ecommerceService.orders = this.ecommerceService.productOrder;
  }

  ngOnInit() {
    this.paid = false;
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.ecommerceService.orders = this.ecommerceService.productOrder;
        });
    this.loadTotal();
  }

}
