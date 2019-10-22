import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  private baseurl = 'http://localhost:8080/FilRougeBack/api';

  getProducts(): Observable<Product[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json'
      })
    };
    return this.http.get<Product[]>(this.baseurl + '/products', httpOptions)
    .pipe(map(products => products.sort((a: Product, b: Product) => a.price - b.price)));
  }
getProductsById(id: number): Observable<Product> {
  const httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };
  return this.http.get<Product>(this.baseurl + '/products/' + id , httpOptions);
}

getAllProductsByPackaging(query: String): Observable<Product[]> {
  const httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };
  return this.http.get<Product[]>(this.baseurl + '/products/search?packaging=' + query, httpOptions)
  .pipe(map(products => products.sort((a: Product, b: Product) => a.price - b.price)));
}

getProductsByType(query: String): Observable<Product[]> {
  const httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };
  return this.http.get<Product[]>(this.baseurl + '/products/search?type=' + query , httpOptions)
  .pipe(map(products => products.sort((a: Product, b: Product) => a.price - b.price)));
}

getProductsByKeyword(query: String): Observable<Product[]> {
  const httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };
  return this.http.get<Product[]>(this.baseurl + '/products/search?description=' + query , httpOptions)
  .pipe(map(products => products.sort((a: Product, b: Product) => a.price - b.price)));
}

postProduct(product: Product) {
  return this.http.post<Product>(this.baseurl + '/products', product);
}

}
