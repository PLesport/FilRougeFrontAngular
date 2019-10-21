import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    return this.http.get<Product[]>(this.baseurl + '/products', httpOptions);
  }
getProductsById(id: number): Observable<Product> {
  const httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };
  return this.http.get<Product>(this.baseurl + '/products/' + id , httpOptions);
}

getProductsByType(query: String): Observable<Product[]> {
  const httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };
  return this.http.get<Product[]>(this.baseurl + '/products/search?type=' + query , httpOptions);
}

}
