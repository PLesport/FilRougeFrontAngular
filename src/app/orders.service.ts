import { Injectable } from '@angular/core';
import { Orders } from './orders';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) {
  }

  private baseurl = 'http://localhost:8080/FilRougeBack/api';

  getOrders(): Observable<Orders[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json'
      })
    };
    return this.http.get<Orders[]>(this.baseurl + '/orders', httpOptions);
  }

  getOrdersById(id: number): Observable<Orders> {
  const httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };
  return this.http.get<Orders>(this.baseurl + '/orders/' + id , httpOptions);
}

getOrdersByUserId(id: number): Observable<Orders[]> {
  const httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };
  return this.http.get<Orders[]>(this.baseurl + '/orders/user/' + id , httpOptions);
}

}
