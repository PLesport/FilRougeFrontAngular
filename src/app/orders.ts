import { OrderLines } from './order-lines';
import { User } from './User';

export class Orders {
  id: number;
  date: Date;
  shippingAdress: string;
  ordersStatus: string;
  orderLine: OrderLines[];
  user: User;
}
