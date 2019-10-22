import { Orders } from './orders';
import { Product } from './product';

export class OrderLines {

id: number;
quantity: number;
product: Product;
orders: Orders;
}
