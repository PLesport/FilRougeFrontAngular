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
  availability: string;
  url: string;

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
  availability: string,
  url: string,
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
    this.availability = availability;
    this.url = url;

  }
}