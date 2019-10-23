import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Orders } from '../orders';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-historique',
  templateUrl: './user-historique.component.html',
  styleUrls: ['./user-historique.component.scss']
})
export class UserHistoriqueComponent implements OnInit {

  orders: Orders[];

  constructor(private ordersService: OrdersService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      ordersService.getOrdersByUserId(Number(productId)).subscribe(result => {
       this.orders = result;
     });
    });
  }
  ngOnInit() {
  }
  computeTotalPrice(order: Orders) {
    return order.orderLine.map(l => l.product.price * l.quantity).reduce((accumulator, currentValue) => accumulator + currentValue);
  }


}
