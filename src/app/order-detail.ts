import { OrderProduct } from './order-product';

export class OrderDetail {
  OrderID: number;
  CustomerId: number;
  CustomerName: string;
  DeliveryAddress: string;
  OrderItems: OrderProduct[];
}
