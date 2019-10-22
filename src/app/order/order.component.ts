import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';
import { Orders } from '../orders';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: Orders[] = [];

  constructor(private orderService: OrdersService, private router: Router) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(result => {
      console.log(result);
      this.orders = result;
      return;
    });
  }

  computeTotalPrice(order: Orders) {
    return order.orderLine.map(l => l.product.price * l.quantity).reduce((accumulator, currentValue) => accumulator + currentValue);
  }

}
