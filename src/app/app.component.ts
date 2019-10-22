import { Component, ViewChild } from '@angular/core';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { CategoryPageComponent } from './category-page/category-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FilRougeFront';

  private collapsed = true;
    orderFinished = false;

   // @ViewChild('products')
    products: CategoryPageComponent;

    //@ViewChild('shoppingCart')
    shoppingCart: CartComponent;

   // @ViewChild('orders')
    orders: OrderComponent;

    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

    finishOrder(orderFinished: boolean) {
        this.orderFinished = orderFinished;
    }

    reset() {
        this.orderFinished = false;
        this.products.reset();
        this.shoppingCart.reset();
        this.orders.paid = false;
    }
}
