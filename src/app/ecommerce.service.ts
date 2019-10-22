import { Injectable } from '@angular/core';
import { ProductOrder } from './product-order';
import { ProductOrders } from './product-orders';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  private productsUrl = 'http://localhost:8080/FilRougeBack/api/products';
  private ordersUrl = 'http://localhost:8080/FilRougeBack/api/orders';

  public productOrder: ProductOrder;
  public orders: ProductOrders = new ProductOrders();

  private productOrderSubject = new Subject();
  private ordersSubject = new Subject();
  private totalSubject = new Subject();

  public total: number;

  ProductOrderChanged = this.productOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
      return this.http.get(this.productsUrl);
  }

  saveOrder(order: ProductOrders) {
      return this.http.post(this.ordersUrl, order);
  }
}
