import { User } from './User';
import { OrderLines } from './order-lines';

export class OrderProduct {
  ID: number;
  ProductID: number;
  ProductName: string;
  OrderedQuantity: number;
  PerUnitPrice: number;
  OrderID: number;
}
