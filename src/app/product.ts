export class Product {

  id: number;
  name: string;
  description: string;
  reference: string;
  type: string;
  origin: string;
  packaging: string;
  price: number;
  discountRate: number;
  stock: number;
  status: string;
  url: string;
  attributes: string;
  quantity: number;


 constructor(
  name: string,
  description: string,
  reference: string,
  type: string,
  origin: string,
  packaging: string,
  price: number,
  discountRate: number,
  stock: number,
  status: string,
  url: string,
  // tslint:disable-next-line: align
  ) {
    this.name = name;
    this.description = description;
    this.reference = reference;
    this.type = type;
    this.origin = origin;
    this.packaging = packaging;
    this.price = price;
    this.discountRate = discountRate;
    this.stock = stock;
    this.status = status;
    this.url = url;

  }

}



