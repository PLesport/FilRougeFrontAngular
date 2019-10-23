import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from '../order-detail.service';
import { ActivatedRoute } from '@angular/router';
import { OrderLines } from '../order-lines';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

orderlines: OrderLines[];
 
  constructor(private orderDetailService: OrderDetailService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const orderId = params.get('id');
      orderDetailService.getOrderLinesByOrderId(Number(orderId)).subscribe(result => {
       this.orderlines = result;
     });
    });
  }
  ngOnInit() {
  }

}
