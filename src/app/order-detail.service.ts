import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderLines } from './order-lines';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
constructor(private http: HttpClient) {
  }

private baseurl = 'http://localhost:8080/FilRougeBack/api';

getOrderLinesByOrderId(id: number): Observable<OrderLines[]> {
    const httpOptions = {headers: new HttpHeaders({Accept: 'application/json'})};

    return this.http.get<OrderLines[]>(this.baseurl + '/orderlines/order/' + id , httpOptions);
  }
}

