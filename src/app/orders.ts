import { OrderLines } from './order-lines';

export class Orders {
  id: number;
  date: Date;
  shippingAdress: string;
  ordersStatus: string;
  orderLine: OrderLines[];
  userId: number;
  }
